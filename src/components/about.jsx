import React,{useEffect} from 'react';
import "../styles/about.css"
import { gsap } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CustomButton from './CustomButton';
import Header from './Header';
import { TimelineLite } from 'gsap/gsap-core';
const About = () => {
 
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    let tl  = new TimelineLite();
   tl.from('.about-section',{
     opacity:0,
     y:90,
   
   duration:3
    })
    
    ScrollTrigger.create({
      trigger:'.about-section',
      animation:tl,
    
  
      toggleActions:'play complete reset  reverse',

      
      
    })
    
  
    
  },[])
  return <div className='about-section' id="about" name="about" >
    <Header section="About me"/>
     
     <div className='section-container'>
       <div className='item1 bio'>
         <div>
         <h1>MY</h1>
         <h1>Biography</h1>
           </div>
         <CustomButton text="Dowload cv" bgColor="rgb(17, 47, 66)"/>
       </div>
       <div className='item2 about'><p>Hi there my name is patrick you probably already know that 
         well let me talk about my self  ,lets go with the short version i love to code , am a hard worker
         i enjoy writing production grade code for complex ui interfaces ,love to game and the list goes on
         ,
         
         </p></div>
     </div>
  </div>;
};

export default About;
