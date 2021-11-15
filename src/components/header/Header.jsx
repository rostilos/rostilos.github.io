import React, { useState } from "react";
import HeaderCategories from "./HeaderCategories";
import BurgerMenu from "./BurgerMenu";
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { setCategory} from '../../redux/actions/category';


const Header = function ({categories, navItems}) {
    
    const dispatch = useDispatch();

    const onChangeCategoryFilter = (category , categoryTitle) => {
        dispatch( setCategory(category, categoryTitle) );
    }

    return (
        <header className="header">
            <div className="header__topbar">
                <div className="header__container _container">
                    <nav className="header__nav nav-header">
                        <ul className="nav-header__list">
                            {navItems.map( (item) =>
                                <li key={item.name}>
                                    <Link to={item.href} className="nav-header__link">
                                        {item.value}
                                    </Link>
                                </li>
                            )}       
                        </ul>
                    </nav>
                    <div className="header__info">
                        <div className="header__tel">
                            <span className="_icon-phone  header__icon header__icon--phone"></span>
                            <span>8 (964) 89 99 119</span>
                        </div>
                        <div className="header__delivery">
                            <span className="_icon-delivery header__icon header__icon--delivery"></span>
                            <span>Доставка</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__content">
                <div className="header__container _container">
                    <BurgerMenu onChangeCategoryFilter={onChangeCategoryFilter} categoriesItems={categories} navItems={navItems}/>
                    <div className="header__logo _ibg">
                        <img src='/images/header/header-logo.png' alt="header-logo"/>
                    </div>
                    <div className="header__search">
                        <input type="text" placeholder='Поиск'/>
                        <span className="_icon-search"></span>
                    </div>
                    <div className="header__info">
                        <div className="header__tel">
                            <span className="_icon-phone  header__icon header__icon--phone"></span>
                            <span className="header__text">8 (964) 89 99 119</span>
                        </div>
                        <div className="header__delivery">
                            <span className="_icon-delivery header__icon header__icon--delivery"></span>
                            <span className="header__text">Доставка</span>
                        </div>
                    </div>
                    <div className="header__actions">
                        <div className="header__icon header__icon--wishlist">
                            <span className="_icon-wishlist"></span>
                        </div>
                        <div className="header__icon header__icon--bag">
                            <span className="_icon-bag"></span>
                        </div>
                        <div className="header__icon header__icon--profile">
                            <span className="_icon-profile"></span>
                        </div>
                    </div>           
                </div>
            </div>
            <HeaderCategories onChangeCategoryFilter={onChangeCategoryFilter} categoriesItems={categories}/>
        </header>

    )
}

export default Header;