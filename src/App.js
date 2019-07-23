import React , { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Projects from './Components/Projects';
import Home from './Components/Home';
import mypic from './Components/Images/CV.png';
import { slide as Menu } from 'react-burger-menu'

class App extends Component {
  render() {
    return (
  <div className='App'>  
  <Menu right> 
  <div className='nav-head'><i className="fab fa-codepen"></i>My Portfolio</div>
    <a id="home" className="menu-item" href="/MyPortfolio/">Home</a>
    <a  id="Resume" className="menu-item"  href="/MyPortfolio/static/MYresume.pdf" target = "_blank">Resume</a>
    <div className='contact'>
      <a href='https://www.linkedin.com/in/roldan-aliscuano-592910180/' target = "_blank"><i className="fab fa-linkedin"></i></a>
      <a href='https://www.facebook.com/robert.aliscuano' target = "_blank"><i className="fab fa-facebook-square"></i></a>
      <a href='https://github.com/rdaliscuano' target = "_blank"><i className="fab fa-github"></i></a>
    </div></Menu>  
  
    <div className='ui-container'>
      <div className='header-content'>
          <a href='/MyPortfolio/' className=''>
            <h2 className='ui-header '>
              <img className='owner-img cursor-pointer' alt='MYPIC' src={mypic} ></img>
              <div className='owner cursor-pointer' > Robert Daniel Aliscuano
              <div className='owner-job cursor-pointer'>Web Developer</div>
                </div></h2></a>
          </div>
        <BrowserRouter basename="/MyPortfolio">
        <Switch >
          <Route  path="/"  component={Home}/>  
          <Route  path="/MyPortfolio/Projects" component={Projects} />
        </Switch>
        </BrowserRouter>
        </div>
</div>
);
}
}
export default App;

