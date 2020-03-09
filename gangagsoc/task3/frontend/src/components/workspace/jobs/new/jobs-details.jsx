import React from 'react'
import { Code } from '../../../common'

import { connect } from 'react-redux'
import {  socketReceiveJobDetails, socketGetJobDetials } from '../../../../common/script/endpoints'
import { SOCKET_CONNECTED } from '../../../../redux/constants/socket'

class JobsDetails extends React.Component{
    constructor(props){
        super(props)

        this.state = {
          received: false,
          details: null,
          initialise: false,
        }
        this.initSocket = this.initSocket.bind(this)
        this.emitGetJobDetails = this.emitGetJobDetails.bind(this)
    }
    
    initSocket(socket){
      socket.io.on(socketReceiveJobDetails, (data) => {
        let job_details = JSON.parse(data.job_details)
        
        // For pretty print
        job_details = JSON.stringify(job_details, undefined, 4)

        this.setState({
          received: true, 
          details: job_details
        })
      })

      this.setState({initialise: true})
    }

    emitGetJobDetails(socket, get_details_of){
      socket.io.emit(socketGetJobDetials, get_details_of)
    }

    componentDidUpdate(prevProps){
      const { initialise } = this.state
      const { socket, jobs } = this.props
      
      if( !initialise && socket.status == SOCKET_CONNECTED ){
        this.initSocket(socket)
      }

      if( prevProps != this.props  &&  socket.status == SOCKET_CONNECTED && jobs.get_details_of != null ){
        this.emitGetJobDetails(socket, jobs.get_details_of)
      }

    }

    componentDidMount(){
      const { initialise } = this.state
      const { socket, jobs } = this.props

      if( !initialise && socket.status == SOCKET_CONNECTED ){
        this.initSocket(socket)
      }

      if( socket.status == SOCKET_CONNECTED && jobs.get_details_of != null ){
        this.emitGetJobDetails(socket, jobs.get_details_of)
      }

    }

    componentWillUnmount(){
      const { socket } = this.props
      const { initialise } = this.state

      if( initialise ) {
        socket.io.off()
        this.setState({initialise: false})
      }
    }

    render(){
      const { received, details } = this.state

      if(received){
        return <Code code={details} heading='Job Details'/>
      }

      else {
        return(
          <div></div>
        )
      }
    }
}

const mapStateToProps = (store) => ({
  socket: store.socket,
  jobs: store.jobs
  
})

export default connect(mapStateToProps)(JobsDetails)