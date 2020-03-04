import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './common/script/history';
import './common/stylesheet/main.scss';

import { setRootDivDimensions, setTheme } from "./common/script/utility"

class Index extends React.Component{
    constructor(props){
        super(props)
        this.init = this.init.bind(this)
        this.registerWindowEvent = this.registerWindowEvent.bind(this)
    }

    init(){
        setRootDivDimensions()
        setTheme()
    }

    registerWindowEvent(){
        window.addEventListener('resize', setRootDivDimensions)
    }

    componentDidMount(){
        this.init()
        this.registerWindowEvent()
    }

    render(){
        return(
           <Router history={history}>
               This is home
           </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("ganga-app"));