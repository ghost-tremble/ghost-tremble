import React,{useEffect} from 'react';
import "../styles/skills.css"
import Header from "./Header.jsx"
import { gsap } from 'gsap/all';

import {skills} from  "../data/data"
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TimelineLite } from 'gsap/gsap-core';
const Skills = () => {
  
  gsap.registerPlugin(ScrollTrigger)

  useEffect(()=>{
    let tl  = new TimelineLite();
   tl.from('.skills-section',{
     opacity:0,
     y:90,
     toggleActions:'play complete',
   duration:3
    })
    
 
    
    ScrollTrigger.create({
      trigger:'.skill-container',
      animation:tl,
      toggleActions:'play complete  reverse reset ',
     
   
    
      
      
    })
    
  
  
  },[])
  return <div className='skills-section' id='skill'>
    
    <Header section="Specialized"/>
    <div className='skills-container'>
    {
          skills.map((skill)=><div className='skill' style={{
              color:skill.color,
            background:skill.background
            }
          }>
              {skill.logo}
              {skill.name}
       
              </div>)
      }
    </div>
    
  </div>;
};

export default Skills;
