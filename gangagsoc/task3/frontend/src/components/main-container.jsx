import React from 'react'
import { connect } from 'react-redux'
import Header from './header'
import Sidebar from './sidebar'
import Workspace from './workspace'

import io from 'socket.io-client'
import { setSocket, socketStatus } from '../redux/actions/socket'
import { SOCKET_CONNECTED, SOCKET_DISCONNECTED } from '../redux/constants/socket'
import { socketConnect, socketDisconnect, socketEndpoint } from '../common/script/endpoints'

class MainContainer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            socket: null
        }
        this.initSocket = this.initSocket.bind(this)
    }

    initSocket(){
        const { setSocket, socketStatus } = this.props
        const socket = io.connect(socketEndpoint)
        
        socket.on(socketConnect, ()=>{
            socketStatus(SOCKET_CONNECTED)
        })
        
        socket.on(socketDisconnect, ()=>{
            socketStatus(SOCKET_DISCONNECTED)
        })
        
        setSocket(socket)
        this.setState({socket: socket})
    }

    componentDidMount(){
        this.initSocket()
    }

    componentWillUnmount(){
        this.state.socket.off()
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
    socketStatus: (state) => dispatch(socketStatus(state))
})

export default connect(mapStateToProps, mapActionToState)(MainContainer)