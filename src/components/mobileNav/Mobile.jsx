import React from 'react'
import "./mobile.css"

import { navData } from '../navbar'
const Mobile = () => {
    
    return (
        <nav role="navigation">
        <div id="menuToggle">
       
          <input type="checkbox" />
          
        
          <span></span>
          <span></span>
          <span></span>
          
        
          <ul id="menu">
          {navData.map((data,index) => {
            const { name, Path } = data;
            return (
              <li key={index}>
       <a
                   href={'#'+Path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  >
                  {name}
                </a>{" "}
          
    
              </li>
            );
          })}
          </ul>
        </div>
      </nav>
    )
}

export default Mobile
