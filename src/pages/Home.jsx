import React, { useState } from 'react';
import MainSlider from '../components/MainSlider';
import ProductsList from '../components/products/ProductsList';
import { useSelector } from 'react-redux';


function Home() {

    const {products} = useSelector( (state) => {
        return {
            products : state.products.items,
        }
    });

    return ( 
        <div className="home-page__container _container">
            <MainSlider className='home-page__main-slider' />
            <div className="home-page__top-sales top-sales">
                <h3 className="top-sales__title">Хиты продаж</h3>
                <div className="top-sales__products products">
                    <ProductsList items={products}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
