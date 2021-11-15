import React, { useState } from 'react';
import MultiRangeSlider from "multi-range-slider-react";
import { setPrice} from '../../redux/actions/filters';
import {  useDispatch } from 'react-redux';


function PriceFilter({productsByCategory}) {
   
    const [productsMinPrice, setProductsMinPrice] = useState(null);
    const [productsMaxPrice, setProductsMaxPrice] = useState(null);

    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(100000);

    const handleInput = (e) => {
        setMinValue(e.minValue);
	    setMaxValue(e.maxValue);
        onChangePriceFilter(e.minValue, e.maxValue);
    }

    const dispatch = useDispatch();
    const onChangePriceFilter = (minPrice, maxPrice) => {
        dispatch( setPrice(minPrice, maxPrice) );
    }

    React.useEffect( () => {
        const minPriceOfProducts = Math.min.apply(Math, productsByCategory.map( (product)=> parseInt(product.price )));
        const maxPriceOfProducts = Math.max.apply(Math, productsByCategory.map( (product)=> parseInt(product.price )));
        setProductsMinPrice(minPriceOfProducts);
        setProductsMaxPrice(maxPriceOfProducts);
        setMinValue(minPriceOfProducts);
        setMaxValue(maxPriceOfProducts);
    },[productsByCategory]);

    return ( 
        <div  className='price-filter'>
            <MultiRangeSlider 
                minValue={minValue}
                maxValue={maxValue}
                step={100}
                min={productsMinPrice}
                max={productsMaxPrice}
                ruler={false}
                label={false}
                onInput={(e) => {
                    handleInput(e);
                }}
            />
            <div className="price-filter__selected-value">
                <div className="price-filter__min">{minValue}</div>
                <span></span>
                <div className="price-filter__max">{maxValue}</div>
            </div> 
        </div>
    )
}

export default PriceFilter;
