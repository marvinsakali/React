import React from 'react'
import myLogo from'../assets/chef.png'

const Header = () => {
  return (
    <header className='header'>
        <img src={myLogo} alt="logo image" />
        <h1 className='header-title'>Chef Claude</h1>
    </header>
  )
}

export default Header