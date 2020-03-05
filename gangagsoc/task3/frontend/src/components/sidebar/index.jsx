import React from 'react'
import { withRouter } from 'react-router-dom'


import NewIcon from  '../../../assets/images/svg/icons/document.svg'
import ConfigureIcon from  '../../../assets/images/svg/icons/toolbox.svg'
import SubmittedIcon from  '../../../assets/images/svg/icons/submit.svg'
import RunningIcon from  '../../../assets/images/svg/icons/clock.svg'
import CompletedIcon from  '../../../assets/images/svg/icons/end.svg'


import DashboardIcon from  '../../../assets/images/svg/icons/dashboard.svg'
import SettingIcon from  '../../../assets/images/svg/icons/wheel.svg'

import '../../../assets/images/svg/icons/icons.svg'

import { 
    jobsNew,
    jobsRunning, 
    jobsCompleted, 
    jobsConfigured, 
    jobsSubmitted, 
    dashboard, 
    settings 
} from "../../common/script/url.js"

import RenderLinks from './renderLinks'

class Index extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            sidebarJobsItems: [
                {
                    title: 'New',
                    icon: NewIcon,
                    link: jobsNew
                },
                {
                    title: 'Configured',
                    icon: ConfigureIcon,
                    link: jobsConfigured
                },
                {
                    title: 'Submitted',
                    icon: SubmittedIcon,
                    link: jobsSubmitted
                },
                {
                    title: 'Running',
                    icon: RunningIcon,
                    link: jobsRunning
                },
                {
                    title: 'Completed',
                    icon: CompletedIcon,
                    link: jobsCompleted
                }
            ],

            sidebarDefaultItems: [
                {
                    title: 'Dashboard',
                    icon: DashboardIcon,
                    link: dashboard
                },
                {
                    title: 'Settings',
                    icon: SettingIcon,
                    link: settings
                }
            ]
        }
    }

    render(){

        const { sidebarDefaultItems, sidebarJobsItems } = this.state
        return(
            <div className='sidebar'>
                <div className="wrapper">
                    <RenderLinks links = {sidebarDefaultItems} />
                </div>

                <div className="wrapper">
                    <div className="heading">
                        Jobs
                    </div>
                    <RenderLinks links = {sidebarJobsItems} />
                </div> 
            </div>
        )
    }
}

export default withRouter(Index)