import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'

import New from './new'
import Configured from './configured'
import Running from './running'
import Completed from './completed'
import Submitted from './submitted'

import * as path from '../../../common/script/url'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Switch>
                <Route path={path.jobsNew} component={New} />
                <Route path={path.jobsConfigured} component={Configured} />
                <Route path={path.jobsCompleted} component={Completed} />
                <Route path={path.jobsRunning} component={Running} />
                <Route path={path.jobsSubmitted} component={Submitted} />
            </Switch>   
        )
    }
}

export default withRouter(Index)