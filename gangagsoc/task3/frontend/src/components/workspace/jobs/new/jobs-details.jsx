import React from 'react'
import CodePython from '../../../common/code-python'

import { socketCreateJobStatus } from '../../../../common/script/endpoints.js'
import { connect } from 'react-redux'

class JobsDetails extends React.Component{
    constructor(props){
        super(props)

        this.state = {
          received: false,
          details: null
        }

    }
    
    componentDidMount(){
      const { socket } = this.props
      if(socket.socket){
        socket.socket.on(socketCreateJobStatus, (data)=>{
          this.setState({
            received: true,
            details: data
          })
        })
      }
    }

    render(){
      const { received, details } = this.state

      if(received){
        return(
            <CodePython code={details} heading='Job Details'/>
        )

      }

      else {
        return(
          <div></div>
        )
      }
    }
}

const mapStateToProps = (store) => ({
  socket: store.socket
  
})

export default connect(mapStateToProps)(JobsDetails)