import Link from 'next/link'
import React from 'react'
import styles from '../app/utils.module.css'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
            <Link href="/contact">Contact</Link>
        </div>
    )
}

export default Sidebar