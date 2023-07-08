'use client'
import React, {useState} from 'react'
import styles from '../../src/app/utils.module.css';
import { dietaryPreference, meal, season, sweetThings } from '@/data';

const totalLeftFilter = [...season, ...dietaryPreference, ...meal, ...sweetThings];
const initalFilterChecked = {};
totalLeftFilter.forEach(ele => {
    initalFilterChecked[ele] = false
})
function SidebarFilter({ title, filterShowBy }) {
    const [isChecked, setIsChecked] = useState(initalFilterChecked);
    return (
        <>
            <h4>{title}</h4>
            {filterShowBy.map((ele, index) => (
                <div className="checkbox-wrapper" key={ele + index}>
                    <label className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            checked={isChecked[ele]}
                            onChange={() => setIsChecked({...isChecked, [ele]: !isChecked[ele]})}
                        />
                        <span>{ele}</span>
                    </label>
                </div>
            ))}
        </>
    )
}

export default SidebarFilter