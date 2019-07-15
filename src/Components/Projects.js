import React, { Component }  from 'react';


class Projects extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            
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
        )
    }
}
export default Projects;