import React from 'react'

import Form from './from'
class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container-wrapper'>
                <h1 className="heading">
                    Create New Job
                </h1>

                <Form />
            </div>
        )
    }
}

export default Index