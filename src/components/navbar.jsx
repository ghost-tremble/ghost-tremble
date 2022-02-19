import React,{useEffect,useRef} from 'react';
import "../styles/navbar.css"
import { TimelineLite } from 'gsap/gsap-core';
import { Power3 } from 'gsap/all';
import Mobile from './mobileNav/Mobile';





export const navData = [{
  name:"work",
  Path:"project"
},
{
  name:"skills",
  Path:"skill"
},
{
  name:"about",
  Path:"about"
},
{
  name:"contact",
  Path:"contact"
},

]
const Navbar = () => {

  let nav =  useRef(null)

  

  useEffect(() => {
    let tl = new TimelineLite()
    tl.from(nav,3,{opacity:0,x:-50,ease:Power3.easeOut})
   
    }
  , [])
  return <div>
      <nav className='navbar' ref={el=> nav=el}>
          <div className='nav-header'><h3>tremble</h3>
          
          <Mobile/>
          </div>
          <div className='nav-list'>
          <ul >
          {navData.map((data,index) => {
            const { name, Path } = data;
            return (
              <li key={index}>
       <a
                   href={'#'+Path}
                 
                  >
                  {name}
                </a>{" "}
          
    
              </li>
            );
          })}
        </ul>
        
    
        
 
          </div>
      
      </nav>
  </div>;
};

export default Navbar;
