import React, { useState } from 'react';


function PriceFilter() {

    return ( 
        <div  className='price-filter filter'>
            <h4 className="filter__title"></h4>
            <input type="range" className="filter__range range-filter"></input>
            <div className="range-filter__value">
                <div className="range-filter__min"></div>
                <span></span>
                <div className="range-filter__max"></div>
            </div> 
        </div>
    )
}

export default PriceFilter;
