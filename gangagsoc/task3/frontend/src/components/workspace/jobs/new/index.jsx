import React from 'react'

import Form from './from'
import JobsDetails from './jobs-details'
import { ContainerHeading, MsgSm } from '../../../common'

import socketIOClient from 'socket.io-client'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('trying to connect')

        const socket = socketIOClient('http://127.0.0.1:9991')
        socket.on('connect', () => {
            console.log('sending data')
            socket.emit('status')
        })

        socket.on('status', ()=>console.log('data revceived from server: ', ))
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