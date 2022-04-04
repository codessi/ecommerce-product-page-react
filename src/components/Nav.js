import React, {useState} from 'react'
import profile from '../images/image-avatar.png'
import menu from '../images/icon-menu.svg'
import cart from '../images/icon-cart.svg'
// import shoes from '../images/image-product-1-thumbnail.jpg'
import trashCan from '../images/icon-delete.svg'
import items from '../data/itemsData'
import close from './../images/icon-close.svg'


const Nav = ({purchase, setPurchase}) => {
  const [showCart, setShowCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleCart = (e) => {
    e.preventDefault()
    setShowCart(!showCart)

  }

  const handleClose = () => {
    setShowMenu(!showMenu)
  }

  const handleDelete = () => {
    setPurchase(0)
  }
  const {image,price, percentOff, item} = items[0]
  return (
    <div>
      <nav>
        <div className="menu-wrapper">
          <div className={showMenu? "mobile-menu": "mobile-menu hide"}>
            
            <ul>
              <li>Collections</li> 
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <img className="menu" onClick= {handleClose } src={showMenu? menu : close} alt="" />
          {/* <img onClick= {handleClose } src={menu} alt="menu" /> */}
          <h3>sneakers</h3>
        </div>
        <div className="user-wrapper">
            <div className="cart-group">
              <a href="#" onClick={ handleCart }>
                <img src={cart} alt="cart" />
                <div className="qty">{purchase}</div>
              </a>
              <div className={
                showCart ? 
                "cart-detail show": 
                "cart-detail"}>
                <h4>Cart</h4>
               {purchase === 0 ? 
               
               <p> Your cart is empty </p> :

                <div className="item-wrapper">
                  <img src={image}alt="shoes" />
                  <div className="product-detail-group">
                    <div className='product-detail-group-title'>{item}</div>
                    <div>${price * percentOff}.00 x {purchase} <span>${price * percentOff* purchase}.00</span></div>
                  </div>
                  <img onClick={handleDelete}  className="product-detail-group-delete"src={trashCan} alt="" />
                </div>
              }


              </div>
            </div>
          
          <img src={profile} className="profile show" alt="profile" />
        </div>

      </nav>
    </div>
  )
}

export default Nav