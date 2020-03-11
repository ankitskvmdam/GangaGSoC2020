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
                <MsgSm type="warning" msg="*Please don't change page until job submitted successfully (Successful message will be displayed). Otherwise you may lost the progress. Switching between different page without losing information will be shiped once the project is complete" />
                <Form />
                <JobsDetails />
            </div>
        )
    }
}



export default Index