import React from 'react'
import { Link } from 'react-router-dom'
import Logo from  '../../../assets/images/svg/logo/logo.svg'
import { home } from '../../common/script/url'
class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='header'>
                <div className="wrapper">
                    <Link to={home}>
                        <Logo className="logo" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Index