import React from 'react';
import './Reavel.scss'
import {useRef,useEffect} from 'react'
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { gsap } from 'gsap/all';
import { TimelineLite,Power2 } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import photo from "./photo.jpg"
const Reaveal = () => {
    gsap.registerPlugin(ScrollTrigger);
    let container = useRef(null)
    let image = useRef(null)
    let  imageReveal  = CSSRulePlugin.getRule('.img-container:after')
console.log(imageReveal)
    const  tl  = new TimelineLite()
 useEffect(()=>{
     
    // tl.to(container,0,{css:{visibility:'visible'}}).to(imageReveal,1.4,{}).from(image,1.4,{
    //     scale:1.6,ease:Power2.easeInOut,delay:-1.6})
    
    gsap.to(imageReveal,{
        duration:3,
        width:"0%",
        ease:Power2.easeInOut,
        scrollTrigger:{
            trigger:'.main',
          toggleActions:'restart complete reverse reset',
            start:"top 90%",
            end:"bottom 60%",
            markers:true
        }
    })
    },[])
 return <section className='main'>
      <div className='container'  ref={el=>container=el}>
          <>
          <div className="img-container">
              <img src={photo} alt="" ref={el=>image=el} />
              </div></>
      </div>
  </section>
};

export default Reaveal;
