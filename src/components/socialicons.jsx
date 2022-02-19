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
        <li><a href="https://github.com/ghost-tremble"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="https://www.linkedin.com/in/patrick-mary-nwakeze-372305205/"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://twitter.com/x9Tremble"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="patokezy@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpen} /></a></li>
        
    </ul>
        </div>
  )
};

export default Socialicons;
