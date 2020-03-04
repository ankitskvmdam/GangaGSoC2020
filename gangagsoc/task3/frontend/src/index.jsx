import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './common/script/history';
import './common/stylesheet/main.scss';

class Index extends React.Component{
    constructor(props){
        super(props)
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