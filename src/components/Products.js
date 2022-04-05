import React , {useState} from 'react'
import productOne from '../images/image-product-1.jpg'

import productTwo from '../images/image-product-2.jpg'
import productThree from '../images/image-product-3.jpg'
import productFour from '../images/image-product-4.jpg'

import tProductOne from '../images/image-product-1-thumbnail.jpg'

import tProductTwo from '../images/image-product-2-thumbnail.jpg'
import tProductThree from '../images/image-product-3-thumbnail.jpg'
import tProductFour from '../images/image-product-4-thumbnail.jpg'


import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import items from '../data/itemsData'

const Products = () => {


  const imgArr = [
    productOne, productTwo, productThree, productFour
  ]
  const thumbImgArr= [
    tProductOne, tProductTwo, tProductThree, tProductFour
  ]
  const [arrNumb, setArrNumb] = useState(0) 
  const [lightBoxShow, setLightBoxShow] = useState(false)

  const prevHandle = () => {
   setArrNumb(arrNumb===0 ? imgArr.length-1 : arrNumb-1)
  }

  const nextHandle = () => {
    setArrNumb(arrNumb === imgArr.length-1 ? 0 : arrNumb + 1)
  }
  const handleLightBox = () => {
    setLightBoxShow(!lightBoxShow)
    // console.log("handlelightbox")
  }

  return (
    <div className='products-container'>
      <div className={lightBoxShow?"overlay show": "overlay"}></div>
      
      <div className={lightBoxShow?'products light-box show': 'products light-box'}>
          <div className="flex-center"><button onClick={handleLightBox}>x</button></div>
          {imgArr.map((el, index) => {
          return(<img key={index} className= {index === arrNumb ? "product show": "product"} src={el} alt="shoes" />)
          })}
          <div className="thumb-nail">

            <img onClick = {()=> setArrNumb(0)}src={tProductOne} alt="" />
            <img onClick = {()=> setArrNumb(1)}src={tProductTwo} alt="" />
            <img onClick = {()=> setArrNumb(2)}src={tProductThree} alt="" />
            <img onClick = {()=> setArrNumb(3)}src={tProductFour} alt="" />
          </div>

          

          <button onClick={prevHandle} className='l-arrow arrow'><img src={previous} alt="left arrow" /></button>
          <button onClick={nextHandle} className='r-arrow arrow'><img src={next} alt="right arrow" /></button>
      </div>
      <div className='products '>
        {imgArr.map((el, index) => {
        return(<img onClick={handleLightBox} key={index} className= {index === arrNumb ? "product show": "product"} src={el} alt="shoes" />)
        })}
        <div className="thumb-nail">

          <img onClick = {()=> setArrNumb(0)}src={tProductOne} alt="" />
          <img onClick = {()=> setArrNumb(1)}src={tProductTwo} alt="" />
          <img onClick = {()=> setArrNumb(2)}src={tProductThree} alt="" />
          <img onClick = {()=> setArrNumb(3)}src={tProductFour} alt="" />
        </div>

        

        <button onClick={prevHandle} className='l-arrow arrow'><img src={previous} alt="left arrow" /></button>
        <button onClick={nextHandle} className='r-arrow arrow'><img src={next} alt="right arrow" /></button>
      </div>
    </div>
    
  )
}

export default Products