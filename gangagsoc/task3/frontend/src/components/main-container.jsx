import React from 'react'
import { connect } from 'react-redux'
import Header from './header'
import Sidebar from './sidebar'
import Workspace from './workspace'

import io from 'socket.io-client'
import { setSocket } from '../redux/actions/socket'

import { socketConnect, socketDisconnect, socketEndpoint } from '../common/script/endpoints'

class MainContainer extends React.Component{
    constructor(props){
        super(props)

        this.initSocket = this.initSocket.bind(this)
    }

    initSocket(){
        const { setSocket } = this.props
        const socket = io.connect(socketEndpoint)

        socket.on(socketConnect, ()=>{
            setSocket(socket)
        })

        socket.on(socketDisconnect, ()=>{
            console.log('disconnected')
        })

    }

    componentDidMount(){
        this.initSocket()
    }
    
    render(){
        return(
            <div className='main'>
                <Header />
                <div className='main-wrapper'>
                    <Sidebar />
                    <Workspace />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    socket: store.socket,
    
})

const mapActionToState = (dispatch) => ({
    setSocket: (socket) => dispatch(setSocket(socket)),
})

export default connect(mapStateToProps, mapActionToState)(MainContainer)