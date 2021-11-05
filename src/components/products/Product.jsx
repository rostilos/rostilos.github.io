import React, { useState } from "react";

const Product = function (props) {

    return (
        <li className="products__item product">
            <div className="product__header">
                <div className="product__labels"></div>
                <span className="product__wishlist _icon-wishlist"></span>
                <div className="product__photo">
                    <img src={props.imagePath} alt="" />
                </div>
            </div>

            <div className="product__body">
                <h3 className="product__title">{props.title}</h3>
                <div className="product__category">{props.categoryTitle}</div>
                <div className="product__price">{`${props.price}P`}</div>
                <div className="product--hovered">
                    <h4 className="product__sub-title"></h4>
                    <div className="product__sizes sizes-product">
                        <div className="sizes-product__col"></div>
                        <div className="sizes-product__col"></div>
                        <div className="sizes-product__col"></div>
                    </div>
                </div>
                <button className="product__button">

                </button>
            </div>
        </li>
    )

    
}

Product.defaultProps = {
    price : 0
}

export default Product;