import React , { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route} from 'react-router-dom';
import Projects from './Components/Projects';
import Home from './Components/Home';
import mypic from './Components/Images/CV.png';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
  <div className='App'> <Navbar/>
  
    <div className='ui-container'>
      
        <div className='header-content'>
          <a href='/' className=''>
            
            <h2 className='ui-header '>
             
              <img className='owner-img cursor-pointer' alt='MYPIC' src={mypic} ></img>
              <div className='owner cursor-pointer' > Robert Daniel Aliscuano
              <div className='owner-job cursor-pointer'>Web Developer</div>
                </div>
                
                </h2>
                
          </a>
        </div>
        <HashRouter>
        <Switch >
  
  <Route  exact path="rdaliscuano.github.io/MyPortfolio"  component={Home}/>  
  <Route  path="rdaliscuano.github.io/MyPortfolio/Projects" component={Projects} />
  
  
  </Switch>
       </HashRouter>
      


    </div>
</div>
);
}
}
export default App;

