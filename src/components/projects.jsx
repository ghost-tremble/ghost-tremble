import React,{useEffect} from 'react';
import Header from './Header';
import { TimelineLite } from 'gsap/gsap-core';
import "../styles/projects.css"
import { gsap } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRaspberryPi,} from '@fortawesome/free-brands-svg-icons';
const Projects = React.memo(({ setModalData,setIsModalOpen}) => {
    
    gsap.registerPlugin(ScrollTrigger)
  let tl  = new TimelineLite();
  useEffect(()=>{
   tl.from('.project-section',{
     opacity:0,
     y:90,
    
   duration:3
    })
    
    ScrollTrigger.create({
      trigger:'.project-section',
      animation:tl,
      endTrigger:"#contact",
      end:"bottom 100px",
      toggleActions:'play complete reset reverse ',
  
      
    })
})
  return (
  <div className='project-section' name='project'  id='project'>
      <Header section="Projects"/>
      <div className='project-container'>
          <div className='project-image'>
              <div>
              <FontAwesomeIcon icon={faRaspberryPi}/>
              </div>
          
          </div>
          <div className='project-description'>
          
          <div className='sec'>
          <h3 className="title">
                Smart-notes
            </h3>
            <span><p> React nodejs</p></span>
              </div>  
            <p className="description">
                &Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi minus fuga voluptates sint veritatis, tenetur quas quibusdam ipsa numquam aperiam minima, unde earum architecto maiores? Exercitationem ducimus iste nostrum corrupti.
            </p>
            <div className='project-links'>
            <span onClick={()=>{
                setModalData("image")
                setIsModalOpen(true)
                }}>Preview</span>  <span>Visit live</span>
            <span>Github repos</span>
            </div>
           
           
          </div>
      </div>
  </div>);
});

export default Projects;
