import React from "react"
import { useState } from "react"
import cart from '../images/icon-cart.svg'
import items from '../data/itemsData'

const Shopping = ({purchase, setPurchase}) => {
  const [count, setCount] = useState(0)
  
  const price = 125

  const inc =() => {
    setCount(count+1)
    console.log(count)
  }
  const dec = () => {
    count>0 && setCount(count-1)
  }
  const cartHandler =() => {
    setPurchase(purchase+count)
  }

  return (
  <div className='container'>    
    <div className="pricing-wrapper">
      <div className="sale-price">
        <div className='sale-usd'>${items[0].price*.5}.00</div>
        <div className='sale-percent'>50%</div>
      </div>
      <div className="msrp">${items[0].price}.00</div>
    </div>
    <div className="quantity">
      <button onClick={dec} className="minus">-</button>
      <p>{count}</p>
      <button onClick={inc} className="plus">+</button>
    </div>
    <button onClick={cartHandler} className="cart">
      <img className='item-cart' src={cart} alt="cart" /><div>Add to cart</div></button>
  </div>
  )
}

export default Shopping