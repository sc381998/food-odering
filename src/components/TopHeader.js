"use client"
import React, { useContext } from 'react'
import styles from '../app/utils.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import AppContext from '@/AppContext';

function TopHeader() {
    const { setIsLoginClicked } = useContext(AppContext);
    return (
        <div className={styles.topHeaderContainer}>
            <div>
                <Link href="/">Home</Link>
                <Link href="/categories">Categories</Link>
                <Link href="/books">Books</Link>
                <Link href="/recipe">Recipe</Link>
                <Link href="/popular">Popular</Link>
            </div>
            <div className='center'>
                <FontAwesomeIcon icon={faUserSecret} style={{ height: "14px", marginRight: "4px" }} />
                <button>Register</button>
                <FontAwesomeIcon icon={faUser} style={{ height: "14px", marginRight: "4px" }} />
                <button onClick={() => setIsLoginClicked(true)}><Link href="/login">Login</Link></button>
            </div>
        </div>
    )
}

export default TopHeader