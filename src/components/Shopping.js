import React from "react"
import { useState } from "react"
import cart from '../images/icon-cart.svg'

const Shopping = () => {
  const [count, setCount] = useState(0)
  const price = 125

  const inc =() => {
    setCount(count+1)
    console.log(count)
  }
  const dec = () => {
    setCount(count-1)
  }

  return (
  <div className='container'>    
    <div className="pricing-wrapper">
      <div className="sale-price">
        <div className='sale-usd'>${price}</div>
        <div className='sale-percent'>50%</div>
      </div>
      <div className="msrp">$250.00</div>
    </div>
    <div className="quantity">
      <button onClick={dec} className="minus">-</button>
      <p>{count}</p>
      <button onClick={inc} className="plus">+</button>
    </div>
    <button className="cart">
      <img className='item-cart' src={cart} alt="cart" /><div>Add to cart</div></button>
  </div>
  )
}

export default Shopping