
import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './redux/store'

import './common/stylesheet/main.scss';
import history from './common/script/history';
import { setRootDivDimensions, setTheme } from "./common/script/utility"

import MainContainer from './components/main-container'

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
               <MainContainer />
           </Router>
        )
    }
}

ReactDOM.render(
    <Provider store = {store}>
        <Index />
    </Provider>, 
    document.getElementById("ganga-app")
);