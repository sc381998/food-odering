import React from 'react'
import styles from '../app/utils.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserSecret } from "@fortawesome/free-solid-svg-icons";

function TopHeader() {
    return (
        <div className={styles.topHeaderContainer}>
            <div>
                <Link href="/">Home</Link>
                <Link href="/news">Categories</Link>
                <Link href="/contact">Books</Link>
                <Link href="/contact">Recipe</Link>
                <Link href="/contact">Popular</Link>
            </div>
            <div className='center'>
                <FontAwesomeIcon icon={faUserSecret} style={{ height: "14px", marginRight: "4px" }}/>
                <button>Register</button>
                <FontAwesomeIcon icon={faUser} style={{ height: "14px", marginRight: "4px" }}/>
                <button>Login</button>
            </div>
        </div>
    )
}

export default TopHeader