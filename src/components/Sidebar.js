import Link from 'next/link'
import React from 'react'
import styles from '../app/utils.module.css'
import SidebarFilter from './SidebarFilter'
import { dietaryPreference, meal, season, sweetThings } from '@/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <h3>Filter Recipes:</h3>
            <p>Check multiple boxes below to narrow recipe search results</p>
            <SidebarFilter title={"By Season"} filterShowBy={season} />
            <SidebarFilter title={"By Dietary Preference"} filterShowBy={dietaryPreference} />
            <SidebarFilter title={"By Meal"} filterShowBy={meal} />
            <SidebarFilter title={"Sweet Things"} filterShowBy={sweetThings} />
            <div className='sidebar-search'>
                <h4>Search Recipe Titles</h4>
                <input placeholder='Enter keyword...'/>
                <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-rotate-90' style={{ height: "14px" }} />
                </span>
            </div>
        </div>
    )
}

export default Sidebar