import React from 'react'
import classnames from 'classnames'
import { PulseLoader } from 'react-spinners'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { socketCreateJob } from '../../../../common/script/endpoints'

class From extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            disable: false
        }

        this.submitJob = this.submitJob.bind(this)
    }

    submitJob(e){
        e.preventDefault()
        const { socket } = this.props

        const form = document.getElementById('create-job-form')
        const jobName = form['job-name'].value

        socket.socket.emit(socketCreateJob, {
            "name": jobName
        })
    }

    render(){
        const { disable } = this.state
        return(
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
        )
    }
}

const mapStateToProps = (store) => ({
    socket: store.socket
    
})

export default withRouter(connect(mapStateToProps)(From))