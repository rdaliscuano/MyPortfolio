import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';



ReactDOM.render(
<Router >
    <Navbar/>
</Router>
,document.getElementById('root'));


