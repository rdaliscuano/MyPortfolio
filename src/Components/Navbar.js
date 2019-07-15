import React, { Component }  from 'react';
import { slide as Menu } from 'react-burger-menu'



class Navbar extends Component{
    render() {
        return(
      <Menu right> 
      <div className='nav-head'><i className="fab fa-codepen"></i>My Portfolio</div>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="Projects" className="menu-item" href="/Projects">Projects</a>
        <a  id="Resume" className="menu-item"  href='/MYresume.pdf' target = "_blank">Resume</a>
        <div className='contact'>
          <a href='https://www.linkedin.com/in/roldan-aliscuano-592910180/' target = "_blank"><i className="fab fa-linkedin"></i></a>
          <a href='https://www.facebook.com/robert.aliscuano' target = "_blank"><i className="fab fa-facebook-square"></i></a>
          <a href='https://github.com/rdaliscuano' target = "_blank"><i className="fab fa-github"></i></a>
        </div>
        
      
        </Menu>  
       
    );  
  }
}
export default Navbar;