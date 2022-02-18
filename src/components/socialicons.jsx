import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Socialicons = ({className}) => {
  return(
    <div className={className}>
    <ul>
        <li><a href="github"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="linked in"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="github"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="gmaol"><FontAwesomeIcon icon={faEnvelopeOpen} /></a></li>
        
    </ul>
        </div>
  )
};

export default Socialicons;
