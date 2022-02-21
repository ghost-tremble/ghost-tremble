import React,{useEffect,useRef} from 'react';
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { gsap } from 'gsap/all';
import { TimelineLite } from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../styles/contact.css"
import SocialIcons from "./socialicons.jsx"

import Header from './Header';

import Footer from './footer';
const Contact = () => {
  gsap.registerPlugin(ScrollTrigger)
  let tl  = new TimelineLite();
  useEffect(()=>{
   tl.from('.contact-section',{
     opacity:0,
     y:90,
     toggleActions:'reverse complete',
   duration:2
    })
    
    ScrollTrigger.create({
      trigger:'.contact-section',
      animation:tl,
      toggleActions:'play complete reset reverse ',
     

      
      
    })
  })
  
  init("user_fnXVH9QLtcIqoz6kJIBjn");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xy6268l",
        "template_mk5m2ih",
        form.current,
        "user_fnXVH9QLtcIqoz6kJIBjn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='contact-section' id='contact'>
     <Header section="Contact"/>
     <div className='section-container'>
     <div className='item1 content'>
       <h1>Hire me </h1>
       <h3>For your next projects</h3>
       <SocialIcons className="contact-list"/>
       
       </div>
       <div className='item2 form'>
       <form 
       id="form"
       ref={form}
       onSubmit={sendEmail}
       >  
    <div>
      <input type="tel"
       name="to_name"
       id="to_name"
      required="required"/>
      <label>Phone number</label>
      <div class="cover"></div>
    </div>  
    <div>
      <input type="email"
      name="from_name"
      id="from_name"
     
      required="required"/>
      <label>Email address</label>
      <div class="cover"></div>
    </div>
    <div>
      <textarea 
        name="message"
        id="message"
      type=""placeholder='Type in your message' required="required"/>
      
      <div class="cover"></div>
    </div>
    <div>
    <div className='hire' style={{background:"#112f42"
  }}>
    <button> Submit</button>
</div>
    </div>
  </form>
  
       </div>
      
    </div>
    <Footer/>
     </div>
    
  );
};

export default Contact;
