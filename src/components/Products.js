import React , {useState} from 'react'
import productOne from '../images/image-product-1.jpg'
import productTwo from '../images/image-product-2.jpg'
import productThree from '../images/image-product-3.jpg'
import productFour from '../images/image-product-4.jpg'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'

const Products = () => {
  const imgArr = [
    productOne, productTwo, productThree, productFour
  ]
  const [arrNumb, setArrNumb] = useState(0) 
  let feature = imgArr[arrNumb]

  const prevHandle = () => {
   setArrNumb(arrNumb===0 ? imgArr.length-1 : arrNumb-1)
  }

  const nextHandle = () => {
    setArrNumb(arrNumb === imgArr.length-1 ? 0 : arrNumb + 1)
  }
  


  return (
    <div className='products'>
      <img className= 'product first' src={feature} alt="shoes" />
      {/* <img className= 'product' src={productTwo} alt="shoes" />
      <img className= 'product' src={productThree} alt="shoes" />
      <img className= 'product' src={productFour} alt="shoes" /> */}
      <button onClick={prevHandle} className='l-arrow arrow'><img src={previous} alt="left arrow" /></button>
      <button onClick={nextHandle} className='r-arrow arrow'><img src={next} alt="right arrow" /></button>
    </div>
  )
}

export default Products