import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div id='footer__container'>
      <a 
        rel="noreferrer"
        href="https://github.com/kemenike/sunk"
        target='_blank' > 
        <label htmlFor="github__icon">GitHub </label>
        <FontAwesomeIcon
          id="github__icon"
          icon={faGithub}
        />
      </a>
    </div>
  )
}

export default Footer