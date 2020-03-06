import React from 'react'

import Form from './from'
import JobsDetails from './jobs-details'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container-wrapper'>
                <h1 className="heading">
                    Create New Job
                </h1>

                <Form />
                <JobsDetails />
            </div>
        )
    }
}

export default Index