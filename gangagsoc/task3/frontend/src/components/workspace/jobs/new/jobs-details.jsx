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

    render(){
      const { received, details,initialise } = this.state
      const { jobs, socket } = this.props

      if(socket.status == SOCKET_CONNECTED) {

        if(!initialise){
          this.initSocket(socket)
        }

        if( jobs != undefined && jobs.get_details_of != null && !received){
          socket.io.emit(socketGetJobDetials, jobs.get_details_of)
        }
      }

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