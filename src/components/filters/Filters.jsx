import React, { useState } from 'react';
import SectionFilter from './SectionFilter';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import { resetFilters} from '../../redux/actions/filters';
import {useDispatch } from 'react-redux';
import ColorFilter from './ColorFilter';



function Filters({categories, productsToShow, productsByCategory, onChangeFilters}) {

   //ОТОБРАЖЕНИЕ ПОПАПА С ФИЛЬТРАМИ НА МАЛЫЪ ЭКРАНАХ
    const [showFiltersPopup, setShowFiltersPopup] = useState(false);

    const onClickFiltersPopup = () =>{
        setShowFiltersPopup(!showFiltersPopup);
    }

    const onApplyFilters = () => {
        setShowFiltersPopup(false);
        onChangeFilters();
    }
    
    const dispatch = useDispatch();

    //ОЧИСТКА ВСЕХ ФИЛЬТРОВ ПРИ УДАЛЕНИИ КОМПОНЕНТА
    React.useEffect ( () => {
        return () => dispatch(resetFilters());
    },[]);

    return ( 
        <div  className="filters">
            <div className={`filters__popup filters-popup ${showFiltersPopup ? '_active': ''}`}>
                <button onClick={onClickFiltersPopup} className="filters-popup__button ">
                    <p>Фильтр</p>   
                    <span className="filters-popup__close"></span>
                </button>
            </div>
            <div className="filters__body">
                <ul className="filters__list">
                    <div className="filters__label">Раздел</div>
                    <li className="filters__item"> 
                        <SectionFilter items={categories}/>
                    </li>

                    <div className="filters__label">Цена</div>
                     <li className="filters__item">
                        <PriceFilter productsByCategory={productsByCategory} productsToShow={productsToShow}/>
                    </li>

                    {/*<li className="filters__item">
                        <ColorFilter/>
                    </li>

                    <li className="filters__item">
                        <BrandFilter/>
                    </li> */}
                </ul>
                <button className="filters__apply-filters" onClick={onApplyFilters}>Применить фильтры</button>
            </div>

            
        </div>
    )
}

export default Filters;
