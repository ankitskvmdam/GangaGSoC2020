import React from 'react'

import Header from './header'
import Sidebar from './sidebar'
import Workspace from './workspace'

class MainContainer extends React.Component{
    constructor(props){
        super(props)
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

export default MainContainer