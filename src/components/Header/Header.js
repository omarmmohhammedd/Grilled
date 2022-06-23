import {React,useState} from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assests/Logo-removebg-preview.png"
const Header = () => {
  const [state, Setstate] = useState(false)
  const toggle =() => {
    Setstate(!state)
  }
  return (
      <div className='navbar'>
          <div className='leftside'>
        <img src={Logo} alt="Logo" id="Logo" />
        <div id={state ? "open":"close"} >
              <Link  to="/" id="Link">Home</Link>
              <Link  to="/about" id="Link">About</Link>
              <Link  to="/menu" id="Link">Menu</Link>
            <Link to="/contact" id="Link">Contact</Link>
          </div>
          </div>
          <div className='rightside'>
              <Link  to="/" id="Link">Home</Link>
              <Link  to="/about" id="Link">About</Link>
              <Link  to="/menu" id="Link">Menu</Link> 
            <Link to="/contact" id="Link">Contact</Link>
          </div>
      <FontAwesomeIcon icon={faBars} id="btn" onClick={toggle}/>
    </div>
  )
}

export default Header