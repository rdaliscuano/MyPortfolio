import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import App from './App';



ReactDOM.render(
<Router>
    <Route component={App}/>
</Router>
,document.getElementById('root'));


