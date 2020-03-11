import React from 'react'
import axios from 'axios'
import classnames from 'classnames'
import { PulseLoader } from 'react-spinners'
import { submitNewJob } from '../../../../common/script/endpoints'
import { MsgSm } from '../../../common'

import { connect } from 'react-redux'
import { getJobDetails, resetJobDetails } from '../../../../redux/actions/jobs'

class Form extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            disable: false,
            jobStatusDisplay: false,
            jobStatus: '',
            type: ''
        }

        this.submitJob = this.submitJob.bind(this)
    }

    submitJob(e){
        e.preventDefault()

        this._source = axios.CancelToken.source()

        const { resetJobDetails, getJobDetails } = this.props
        resetJobDetails()

        const form = document.getElementById('create-job-form')
        const jobName = form['job-name'].value
        
        this.setState({disable: true})

        axios.post(submitNewJob, {
            name: jobName
        }, { cancelToken: this._source.token })
        .then( data => {
            this.setState({disable: false})
            
            //Job submitted successfully
            if(data.status == 200){
                this.setState({
                    jobStatus: "Job submitted successfully",
                    jobStatusDisplay: true,
                    type: "success"
                })
                getJobDetails(data.data.job_id)

                // remove message after 3 sec.
                this._jobStatus = setTimeout(()=>{
                    this.setState({
                        jobStatusDisplay: false
                    })
                }, 3000)
            }

            //Job not submitted successfully
            else {
                this.setState({
                    jobStatus: "Job not submitted successfully",
                    jobStatusDisplay: true,
                    type: "error"
                })
            }
                
        })
        .catch( err => {
            if( axios.isCancel(err)){
                console.log('Request cancel: Potential cause is changing the route')
            }
            else {
                console.log(err)
                this.setState({disable: false})
            }

        })

    }

    componentDidMount(){
        this._source = ''
    }

    componentWillUnmount(){
        if(this._source != '')
            this._source.cancel()
        clearInterval(this._jobStatus)
    }

    render(){
        const { disable, jobStatusDisplay, jobStatus, type } = this.state
        return(
            <div>
                <form action="" className="form" id='create-job-form'>
                    <div className="form-group">
                        <label htmlFor="job-name" className="label">Job Name</label>
                        <input name="job-name" type="text" className={classnames({"input outline": true, "active": !disable})} placeholder="Job Name (like: My First Job)" disabled={disable}/>
                    </div>

                    <div className="form-button-container">
                        <button className={classnames({"button primary": true, "active": !disable, "disable": disable})} disabled={disable} onClick={(e)=>this.submitJob(e)}><span>Submit</span></button>
                        <div className={classnames({"m-l-8": true, "hidden": !disable})}>
                            <PulseLoader size={10} />
                        </div>
                    </div>
                </form>

                <MsgSm type={type} msg={jobStatus} classList={classnames({
                    "hidden": !jobStatusDisplay
                })}/>    
            </div>
        )
    }
}

const mapActionToState = (dispatch) => ({
    getJobDetails: (id) => dispatch(getJobDetails(id)),
    resetJobDetails: () => dispatch(resetJobDetails())
})

export default connect(null, mapActionToState)(Form)