import React from 'react'
import classnames from 'classnames'
import { PulseLoader } from 'react-spinners'

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

        this.setState({
            disable: true
        })
    }

    render(){
        const { disable } = this.state
        return(
            <form action="" className="form">
                <div className="form-group">
                    <label htmlFor="job-name" className="label">Job Name</label>
                    <input name="job-name" type="text" className={classnames({"input outline": true, "active": !disable})} placeholder="Enter Job Name (like: My First Job)" disabled={disable}/>
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

export default From