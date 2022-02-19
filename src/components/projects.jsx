import React,{useEffect} from 'react';
import Header from './Header';
import { TimelineLite } from 'gsap/gsap-core';
import "../styles/projects.css"
import { gsap } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { projectData } from '../data/data';
import ProjectT from './ProjectT';
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
     
      {
        projectData.map(({name,image,desc,url,repos ,preview,tech})=>{
          return <ProjectT name={name} image={image} desc={desc}
           setModalData={setModalData} setIsModalOpen={setIsModalOpen}  url={url} tech={tech} repos={repos} preview={preview}/>
        })
      }
  </div>);
});

export default Projects;
