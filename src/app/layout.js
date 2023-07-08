"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import styles from '../app/utils.module.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import TopHeader from '@/components/TopHeader'
import Head from 'next/head'
import Footer from '@/components/Footer'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useState } from 'react'
import AppContext from '@/AppContext'
import { dietaryPreference, meal, products, season, sweetThings } from '@/data'
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

const totalLeftFilter = [...season, ...dietaryPreference, ...meal, ...sweetThings];
const initalFilterChecked = {};
totalLeftFilter.forEach(ele => {
  if (ele === "Autumn" || ele === "Egg Free") {
    initalFilterChecked[ele] = true
  } else {
    initalFilterChecked[ele] = false
  }
})

export default function RootLayout({ children }) {
  const [productDetails, setProductDetails] = useState(products);
  const [productsChecked, setProductsChecked] = useState(initalFilterChecked);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [selectedCart, setSelectedCart] = useState([]);
  return (
    <html lang="en">
      <Head>
        <title>First Post</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <body className={inter.className}>

        <AppContext.Provider value={{
          productDetails, setProductDetails,
          productsChecked, setProductsChecked,
          setIsLoginClicked, selectedCart, setSelectedCart
        }}>
          <TopHeader />
          <div className={styles.container}>
            <Header />
            <div className='d-flex'>
              {!isLoginClicked && <Sidebar />}
              <div className={styles.content}>
                {children}
              </div>
            </div>
          </div>
        </AppContext.Provider>
        <Footer />
      </body>
    </html>
  )
}
