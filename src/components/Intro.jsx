import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from 'gsap/all';
import { Power3 } from 'gsap/all';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import React,{useEffect} from 'react';
import "../styles/intro.css"
const Intro = () => {
  
  useEffect(() => {
    gsap.from('.intro-container',{
      duration:0,
      css:{visibility:"hidden"},
      ease:Power3.ease
    })
    gsap.from('.text1',{
      duration:3,
      x:-40,
      opacity:0,
      ease:Power3.ease
    })
    
    gsap.from('.text2',{
      duration:3,
      x:-40,
      opacity:0,
      ease:Power3.ease,
      delay:.2
    })
    gsap.from('.message-container',{
      duration:3,
      x:-100,
      ease:Power3.easeInOut,
      delay:.3
    })
    
    
    }
  , [])
  return <div className='intro-container'>
      <div className='content'>
     
            <h2 className='text1'>
            Hi  I'm <span>Patrick</span> Frontend Engineer
              </h2>
        <p className='text2'>
        I am a Frontend end, user interface and experience engineer. 
      I build cool user interfaces and experience for Android and on the web ,
      Looking forward to working with you . </p>  
       
          
     
      </div>
      
      <div  className='message-container'>
      <div className='message'>
<a href="mailto:patokezy@gmail.com">
<FontAwesomeIcon icon={faEnvelopeOpen}/>
</a>
      </div>
      </div>
    
    
  </div>;
};

export default Intro;
