import React from 'react'

class From extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form action="" className="form">
                <div className="form-group">
                    <label htmlFor="job-name" className="label">Job Name</label>
                    <input name="job-name" type="text" className="input outline" placeholder="Enter Job Name (like: My First Job)" />
                </div>

                <div className="form-button-container">
                    <button className="button primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default From