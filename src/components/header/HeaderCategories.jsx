import React, { useState } from "react";
import { Link } from 'react-router-dom';

const HeaderCategories = function ({categoriesItems, onChangeCategoryFilter}) {

    return (
        <div className="header__categories header-categories">
            <div className="header-categories__container _container">
                <div className="header-categories__body">
                    <ul className="header-categories__list">
                        {categoriesItems.map( (item)=> 
                            <li key={item.category} className="header-categories__item">
                                <Link to={`/catalog/`} onClick={() => onChangeCategoryFilter(item.category, item.value)}  className="header-categories__link">
                                    <span className={"header-categories__icon " + item.iconClass}></span>
                                    <span className="header-categories__text">{item.value}</span>
                                </Link>
                            </li>
                        )}

                        <button className="header-categories__etc"></button>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderCategories;