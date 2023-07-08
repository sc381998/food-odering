'use client'
import React, { useContext } from 'react'
import styles from '../../src/app/utils.module.css';
import AppContext from '@/AppContext';
import { products } from '@/data';

function SidebarFilter({ title, filterShowBy }) {
    const context = useContext(AppContext);
    const {productsChecked, setProductsChecked, setProductDetails } = context || {};

    const handleCheckbox = (param) => {
        const allProductsChecked = {...productsChecked, [param]: !productsChecked[param]}
        setProductsChecked(allProductsChecked)
        const selectedProductsChecked = [];
        for (const property in allProductsChecked) {
            if(allProductsChecked[property]){
                selectedProductsChecked.push(property);
            }
        }
        if(selectedProductsChecked && Array.isArray(selectedProductsChecked) && selectedProductsChecked.length){
            const filteredProduct = products.filter(ele => {
                let count = 0;
                selectedProductsChecked.forEach(item => {
                    if(ele.categories.includes(item)) count++;
                })
                if(count === selectedProductsChecked.length) return true
                return false;
            })
            setProductDetails(filteredProduct);
        }
    }
    return (
        <>
            <h4>{title}</h4>
            {filterShowBy.map((ele, index) => (
                <div className="checkbox-wrapper" key={ele + index}>
                    <label className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            checked={productsChecked[ele]}
                            onChange={() => handleCheckbox(ele)}
                        />
                        <span>{ele}</span>
                    </label>
                </div>
            ))}
        </>
    )
}

export default SidebarFilter