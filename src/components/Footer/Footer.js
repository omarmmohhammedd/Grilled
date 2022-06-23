import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className='footer'>
      <div id="socialmedia">
      <FontAwesomeIcon icon={ faFacebook} id="img"/>
      <FontAwesomeIcon icon={faTwitter }   id="img"/>
      <FontAwesomeIcon icon={faInstagram }  id="img" />
        <FontAwesomeIcon icon={faWhatsapp} id="img" />
        </div>
      <h4>&copy; 2022 Grilled Resturant</h4>
      
    </div>
  )
}

export default Footer