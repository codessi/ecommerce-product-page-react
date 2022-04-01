import React from 'react'
import profile from '../images/image-avatar.png'
import menu from '../images/icon-menu.svg'
import cart from '../images/icon-cart.svg'


const Nav = () => {
  return (
    <div>
      <nav>
        <div className="menu-wrapper">
          <img src={menu} alt="menu" />
          <h3>sneakers</h3>
        </div>
        <div className="user-wrapper">
          <img src={cart} alt="cart" />
          <img src={profile} className="profile" alt="profile" />
        </div>
      </nav>
    </div>
  )
}

export default Nav