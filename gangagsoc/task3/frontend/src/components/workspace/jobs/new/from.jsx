import React from 'react'
import axios from 'axios'
import classnames from 'classnames'
import { PulseLoader } from 'react-spinners'
import { submitNewJob } from '../../../../common/script/endpoints'
import { MsgSm } from '../../../common'

import { connect } from 'react-redux'
import { getJobDetails } from '../../../../redux/actions/jobs'

class From extends React.Component{
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

        const form = document.getElementById('create-job-form')
        const jobName = form['job-name'].value
        
        this.setState({disable: true})

        axios.post(submitNewJob, {
            name: jobName
        })
        .then( data => {
            this.setState({disable: false})
            
            //Job submitted successfully
            if(data.status == 200){
                this.setState({
                    jobStatus: "Job submitted successfully. Loading job details and result",
                    jobStatusDisplay: true,
                    type: "success"
                })

                this.props.getJobDetails(data.data.job_id)
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
            this.setState({disable: false})
        })

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
    getJobDetails: (id) => dispatch(getJobDetails(id))
})

export default connect(null, mapActionToState)(From)