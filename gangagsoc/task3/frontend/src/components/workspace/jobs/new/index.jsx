import React from 'react'

import Form from './from'
import JobsDetails from './jobs-details'
import { ContainerHeading, MsgSm } from '../../../common'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { socket } = this.props
        console.log(socket)
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

const mapStateToProps = (store) => ({
    socket: store.socket
    
})

export default withRouter(connect(mapStateToProps)(Index))