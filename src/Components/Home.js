import React, { Component }  from 'react';



class Home extends Component {
    render () {
        return (
          
          
    <div className='ui-container'>
         
    <div className='head'>ABOUT 
          <strong> ME</strong>
      </div>
        <div className='columncards'>
            <div className="row">
            <div className="column">
            <div className="about2.me card">
            <div className="about2.me card" >
            <i className="fas fa-network-wired"></i>
              <h5><strong>NETWORKS</strong></h5>
              <p>
              Solid overview of Enterprise-Level networking concepts.
              </p>
              </div>
            </div>
            </div>
            <div className="column">
               <div className="about1.me card" style={{background:'#f7d27e'}} >
              <i className="far fa-file-code"></i>
              <h5><strong>WEB DEVELOPER</strong></h5>
              <p>
                Developeing different web application on both fornt and backend of it.
              </p>
              </div>
            </div>
            <div className="column">
              <div className="about3.me card"> 
              <div className="about3.me card"  >
              <i className="fas fa-paint-brush"></i>
              <h5><strong>DESIGNER</strong></h5>
              <p>
                Graphics and photos designer, database construction is my thing aswell.
              </p>
              </div></div>
            </div>
            
          </div>
          </div>
          <div className='container'>
         <div className='row2'>
           <div className='section1 column2'>
              <div className='experience1 card2'>
                <div className='exp-title'>
                  MY <strong> EXPERIENCE</strong>
                </div>
                <div className='exp-head'>
                <i className="fas fa-desktop"></i>
                <h5> <strong>Technical Support (OJT)</strong> </h5>
                <p>December 2018 - May 2019 (5 Months)</p>
                </div>
              </div>
           </div>
           <div className='section2 column2'>
              <div className='experience2 card3'>
              <div className='skill-title'>
                  MY <strong> SKILLS</strong>
                </div>
                <div className='skills-head1'>
                <i className="fab fa-java"></i>
                <h5> <strong>JAVASCRIPT</strong> </h5>
                <p></p>
                </div>

                <div className='skills-head2'>
                <i className="fab fa-css3"></i>
                <h5> <strong>CSS3</strong> </h5>
                <p></p>
                </div>

                <div className='skills-head3'>
                <i className="fab fa-html5"></i>
                <h5> <strong>HTML5</strong> </h5>
                <p></p>
                </div>

                <div className='skills-head4'>
                <i className="fab fa-bootstrap"></i>
                <h5> <strong>BOOTSTRAP</strong> </h5>
                <p></p>
                </div>

                <div className='skills-head5'>
                <i className="fab fa-react"></i>
                <h5> <strong>REACT</strong> </h5>
                <p></p>
                </div>
              </div>
           </div>


         </div>
         </div>
         <div className='projdiv' style={{width: '100%', margin: 'auto'}}>
            
            <div className='projhead'>
                MY <strong> PROJECTS</strong>
            </div>
            <div className="project-container">
                <div className='project1'>
                   <div className='proj1cont'>
                    <h3>LYCEUM OF THE PHILIPPINES-LAGUNA ELECTRONIC DIARY</h3>
                    <p>An Online E-Diary for Internation high school students of lyceum of the philippines
                        Laguna.
                    </p>
                    <a href='http://lpuediary.000webhostapp.com/' target = "_blank" className='projlink'><button>Go now</button></a>
                       </div> 
                    <div className='bgcolor1'>
                    </div>
                </div>
            <div className='project2'>
                <div className='proj2cont'>
                    <h3>VOTING APP FOR SUPREME STUDENT COUNCIL OF LPU
                    </h3>
                    <p>An Online voting application for supreme student council of lyceum of the philippines
                        Laguna.
                    </p>
                    <a href='http://aliscuano.000webhostapp.com' className='projlink' target = "_blank"><button>Go now</button></a>
                    </div> 
                    <div className='bgcolor2'>
                        </div>
                </div>
                    
                
            </div>
     
    </div>
         <div className='footer'>
           <div className='fcontent'>
            <div className='foot'> CONTACT <strong> ME</strong></div>
            <h4 class="ui inverted header">&copy; Copyright 2019 | All rights reserved</h4>
         <a href='https://www.linkedin.com/in/roldan-aliscuano-592910180/' target = "_blank"><i className="fab fa-linkedin"></i></a>
          <a href='https://www.facebook.com/robert.aliscuano' target = "_blank"><i className="fab fa-facebook-square"></i></a>
          <a href='https://github.com/rdaliscuano' target = "_blank"><i className="fab fa-github"></i></a>
          </div>
         </div>
         </div>
        )
    }
}
export default Home;