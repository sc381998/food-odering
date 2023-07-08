import React from 'react'

function Footer() {
    return (
        <section className='footer'>
            <div className='share'>
                <a href='#' className='fab fa-facebook-f'></a>
                <a href='#' className='fab fa-twitter'></a>
                <a href='#' className='fab fa-instagram'></a>
                <a href='#' className='fab fa-linkedin'></a>
                <a href='#' className='fab fa-pinterest'></a>
            </div>
            <div className='links'>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#menu'>Menu</a>
                <a href='#product'>Product</a>
                <a href='#contact'>Contact</a>
            </div>
            <div>
                <div className='credit'>
                    created by <span>Bishal Choudhary </span>
                     | All Rights Reserved
                </div>
            </div>
        </section>
    )
}

export default Footer