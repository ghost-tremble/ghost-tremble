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
        >
          {name}
        </a>
    
              </li>
            );
          })}
          </ul>
        </div>
      </nav>
    )
}

export default Mobile
