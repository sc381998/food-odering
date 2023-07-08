import Image from 'next/image'
import styles from './page.module.css'
import products from '@/data'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='box-container'>
        {
          products.map(item => (
            <div className='box' key={item.id}>
              <Image src={item.img} alt="" />
              <h3>{item.name}</h3>
              <div className='price'>{item.price}</div>
              {/* {selectedData.includes(item.id) ?  */}
              {/* <a href="#" className='btn' >Remove from Cart</a> : */}
              <a href="#" className='btn'>Add to Cart</a>
              {/* } */}
            </div>
          ))
        }
      </div>
    </main>
  )
}
