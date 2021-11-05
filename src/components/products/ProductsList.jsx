import { getAllByTitle } from "@testing-library/dom";
import React, { useState } from "react";
import Product from './Product';


function ProductsList({ items }) {
    return (
        <ul className="products-list">
            {items.map( item => (
               <Product 
                    key={item.id}
                    {...item}
                    // key={item.id}
                    // title={item.title}
                    // category={item.category}
                    // price={item.price}
                    // imagePath={item.imagePath}
                /> 
            ))}
        </ul>
    )
}

export default ProductsList;
