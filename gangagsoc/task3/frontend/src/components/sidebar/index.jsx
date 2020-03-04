import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import NewIcon from  '../../../assets/images/svg/icons/document.svg'
import ConfigureIcon from  '../../../assets/images/svg/icons/toolbox.svg'
import SubmittedIcon from  '../../../assets/images/svg/icons/submit.svg'
import RunningIcon from  '../../../assets/images/svg/icons/clock.svg'
import CompletedIcon from  '../../../assets/images/svg/icons/end.svg'

import '../../../assets/images/svg/icons/icons.svg'

import { jobsNew, jobsRunning, jobsCompleted, jobsConfigured, jobsSubmitted } from "../../common/script/url.js"

class Index extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            sidebarItems: [
                {
                    title: 'New',
                    icon: 'icon-clock',
                    link: jobsNew
                },
                {
                    title: 'Configured',
                    icon: 'icon-clock',
                    link: jobsConfigured
                },
                {
                    title: 'Submitted',
                    icon: 'icon-clock',
                    link: jobsSubmitted
                },
                {
                    title: 'Running',
                    icon: '#icon-clock',
                    link: jobsRunning
                },
                {
                    title: 'Completed',
                    icon: 'icon-clock',
                    link: jobsCompleted
                }
            ]
        }
    }

    render(){

        const { sidebarItems } = this.state
        return(
            <div className='sidebar'>
                <div className="wrapper">
                    {sidebarItems.map( (item, key) => {
                        return(
                            <NavLink to={item.link} className="item" activeClassName="active" key={key}>
                                <svg className="icon">
                                    <use xlinkHref={item.icon}></use>
                                </svg>
                                <div className="title">
                                    {item.title}
                                </div>
                            </NavLink>
                        )
                    })}
                </div>

                <div className="wrapper">
                    {sidebarItems.map( (item, key) => {
                        return(
                            <NavLink to={item.link} className="item" activeClassName="active" key={key}>
                                <div className="title">
                                    {item.title}
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(Index)