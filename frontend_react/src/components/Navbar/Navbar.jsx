import React from 'react'
import "./Navbar.scss"
import { images } from '../../constants'
export const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar__logo'>
        <img src={images.logo} alt="logo"/>
      </div>
    <ul className='app__navbar__links'>
      {['Home', 'About', 'Contact', 'Work', 'Skills' ].map((item) => (
        <li className='app__flex p-text' key={`link-${item}`}>
          <div/>
          <a href={`#${item}`}> {item} </a>
        </li>
      ))}
    </ul>

    </nav>
  )
}

export default Navbar
