import React from 'react';
import "../styles/header.css"
const Header = (props) => {
  return (
    <div className='header'> <h1>{props.section}</h1></div>
  )
};

export default Header;
