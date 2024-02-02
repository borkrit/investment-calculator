import React from 'react'
import logoSrc from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id='header' >
        <img src={logoSrc} alt="Investment logo " />
         <h1> Investment Calculator</h1>
    </header>
  )
}

export default Header