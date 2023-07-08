"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from "../assets/images/logo.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBowlRice, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import { products } from '@/data'
import AppContext from '@/AppContext'

function Header() {
  const [searchKey, setSearchKey] = useState("");
  const [cart, setCart] = useState([]);
  const { setProductDetails, selectedCart } = useContext(AppContext);
  const cartRef = useRef();

  // function debounce(fun, ms) {
  //   let timer = null;
  //   return function (...args) {
  //     const onComplete = () => {
  //       fun.apply(this, args);
  //       timer = null;
  //     }
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //     timer = setTimeout(onComplete, ms);
  //   };
  // }

  const handleChange = e => {
    const val = e.target.value
    setSearchKey(val);
  }
  const handleSearch = () => {
    const filteredProduct = products.filter(ele => ele.name.includes(searchKey));
    setProductDetails(filteredProduct);
  }
  const handleCart = () => {
    cartRef.current.classList.toggle("active");
  }
  useEffect(() => {
    console.log("selectedCart",selectedCart)
    const filteredProduct = products.filter(ele => selectedCart.includes(ele.id));
    console.log("filteredProduct",filteredProduct)
    setCart(filteredProduct);
  }, [selectedCart])
  return (
    <>
      <div className='d-flex upper-header'>
        <div className='logo'>
          <Image src={logo} alt="logo" />
        </div>
        <div className='search-container'>
          <select>
            <option>All Categories</option>
            <option>Food</option>
            <option>Books</option>
          </select>
          <input onChange={handleChange} placeholder='Search recipes...'/>
          <span onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-rotate-90' style={{ height: "14px" }} />
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faLaptop} style={{ height: "14px" }} />
          <span style={{ paddingLeft: "8px" }}>Favourites</span>
          <FontAwesomeIcon icon={faBowlRice} style={{ height: "14px", paddingLeft: "20px" }} />
          <span onClick={handleCart} style={{ paddingLeft: "8px", cursor: "pointer" }}>Cart</span>
        </div>
      </div>
      <div className="cart-items-container" ref={cartRef}>
          {cart.length ? 
          cart.map(item => (
            <div className="cart-item" key={item.id}>
              <span className="fas fa-times"></span>
              <Image src={item.img} alt="" width={80} height={50}/>
              <div className="content">
                <h4>{item.name}</h4>
                <div className="price">{item.cookingTime}minutes</div>
              </div>
            </div>
          )) : 
            <div className='empty-cart'>Your cart is empty</div>
          }
          <a href="#" className="btn checkout-btn">
            checkout now
          </a>
        </div>
      <div className='lower-header'>
        <div>
          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/books">Books</Link>
          <Link href="/recipe">Recipe</Link>
          <Link href="/popular">Popular</Link>
        </div>
        <div className='social-icons'>
          <FontAwesomeIcon icon={faFacebook} style={{ height: "14px" }} />
          <FontAwesomeIcon icon={faTwitter} style={{ height: "14px" }} />
          <FontAwesomeIcon icon={faInstagram} style={{ height: "14px" }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ height: "14px" }} />
          <FontAwesomeIcon icon={faGithub} style={{ height: "14px" }} />
        </div>
      </div>
    </>
  )
}

export default Header