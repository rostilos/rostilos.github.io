import React, { useState } from 'react';
import SectionFilter from './SectionFilter';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';



function Filters(props) {

    return ( 
        <div  className="filters">
            <div className="filters__body">
                <ul className="filters__list">
                    <div className="filters__label">Раздел</div>
                    <li className="filters__item"> 
                        <SectionFilter items={props.categories}/>
                    </li>

                    {/* <li className="filters__item">
                        <PriceFilter/>
                    </li>

                    <li className="filters__item">
                        <ColorFilter/>
                    </li>

                    <li className="filters__item">
                        <BrandFilter/>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Filters;
