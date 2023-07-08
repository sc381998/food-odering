"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { products } from '@/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faThumbsUp, faThunderstorm } from '@fortawesome/free-solid-svg-icons'
import AppContext from '@/AppContext'
import { useContext } from 'react'

export default function Home() {
  const context = useContext(AppContext);
  const { productDetails, selectedCart, setSelectedCart } = context || {};
  const onAddToCart = (id) => {
    setSelectedCart([...selectedCart, id])
  }
  const onRemoveFromCart = (id) => {
    const filtertedData = selectedCart.filter(ele => ele !== id);
    setSelectedCart(filtertedData);
  }
  return (
    <main className={styles.main}>
      <div className='box-container'>
        {productDetails.length ?
          productDetails.map(item => (
            <div className='box' key={item.id}>
              <Image src={item.img} alt="" />
              {item.isPopular && <span className='popular-container'>
                <FontAwesomeIcon icon={faThunderstorm} style={{ height: "10px" }} />
                <span className='popular'>POPULAR</span>
              </span>}
              <div className='d-flex-align'>
                <span>
                  <FontAwesomeIcon icon={faStopwatch} className='fa-light' style={{ height: "14px" }} />
                  <span>{`${item.cookingTime} `}MINUTES</span></span>
                <span><FontAwesomeIcon icon={faThumbsUp} className='fa-light' style={{ height: "14px" }} />
                  <span>SUPER EASY</span></span>
              </div>
              {selectedCart.includes(item.id) ? 
                <a href="#" className='btn add-to-cart' onClick={() => onRemoveFromCart(item.id)}>Remove from Cart</a> :
                <a href="#" className='btn add-to-cart' onClick={() => onAddToCart(item.id)}>Add to Cart</a>
              }
              
              {/* <div className='price'>{item.price}</div> */}
              <p>Baked sweet potatoes with creamy avocado & pumpkin</p>
            </div>
          )) : 
          <div className='no-data'>No data</div>
        }
      </div>
    </main>
  )
}
