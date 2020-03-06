import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'

import Dashboard from './dashboard'
import Settings from './settings'
import Jobs from './jobs'


import  * as path  from '../../common/script/url'

class Index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='container'>
                <Switch>
                    <Redirect from = "/" to={path.dashboard} exact={true}/>
                    <Route path={path.dashboard} component={Dashboard} />
                    <Route path={path.settings} component={Settings} />
                    <Route path={path.jobs} component={Jobs} />
                </Switch>
            </div>
        )
    }
}

export default Index