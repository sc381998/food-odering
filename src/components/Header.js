import React from 'react'
import logo from "../assets/images/logo.png"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBowlRice, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

function Header() {
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
          <input />
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-rotate-90' style={{ height: "14px" }} />
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faLaptop} style={{ height: "14px" }} />
          <span style={{ paddingLeft: "8px" }}>Favourites</span>
          <FontAwesomeIcon icon={faBowlRice} style={{ height: "14px", paddingLeft: "20px" }} />
          <span style={{ paddingLeft: "8px" }}>Cart</span>
        </div>
      </div>
      <div className='lower-header'>
        <div>
          <Link href="/">Home</Link>
          <Link href="/news">Categories</Link>
          <Link href="/contact">Books</Link>
          <Link href="/contact">Recipe</Link>
          <Link href="/contact">Popular</Link>
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