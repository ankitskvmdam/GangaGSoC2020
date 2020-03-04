import React from 'react'

import Logo from  '../../../assets/images/svg/logo/logo.svg'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='header'>
                <div className="wrapper">
                    <div className="logo">
                        <img src={Logo} alt="Ganga Logo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index