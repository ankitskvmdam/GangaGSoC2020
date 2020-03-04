import React from 'react'

import Header from "./header"
import Sidebar from "./sidebar"

class MainContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='main'>
                <div className="wrapper">
                    <Header />
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default MainContainer