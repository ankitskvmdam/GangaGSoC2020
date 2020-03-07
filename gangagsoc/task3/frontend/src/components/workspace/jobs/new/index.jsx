import React from 'react'

import Form from './from'
import JobsDetails from './jobs-details'
import { ContainerHeading, MsgSm } from '../../../common'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container-wrapper'>
                <ContainerHeading heading="Create New Job" />
                <Form />
                <MsgSm type="warning" msg="*Please don't change page after submitting page. You may lost the progress. Switching between different page without losing information will be ship once the project is complete" />
                <JobsDetails />
            </div>
        )
    }
}

export default Index