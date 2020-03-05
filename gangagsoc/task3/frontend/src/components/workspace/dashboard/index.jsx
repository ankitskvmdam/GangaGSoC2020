import React from 'react'
import { withRouter } from 'react-router-dom'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container-wrapper'>
                <p>
                    This is dashboard page. Here a comprehensive details of all jobs will be shown. <br/>
                    <strong>Please move to jobs section.</strong>
                </p>
            </div>
        )
    }
}

export default withRouter(Index)