import React from 'react'

import Form from './from'
import JobsDetails from './jobs-details'
import ContainerHeading from '../../../common/container-heading'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container-wrapper'>
                <ContainerHeading heading="Create New Job" />
                <Form />
                <JobsDetails />
            </div>
        )
    }
}

export default Index