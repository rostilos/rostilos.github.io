import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';


const BurgerMenu = function (props) {

    let categoriesItems = props.categoriesItems;
    let navItems = props.navItems;
    let onChangeCategoryFilter = props.onChangeCategoryFilter;

    const burgerMenuRef = useRef(null);
    const [burgerActive, setBurgerActive] = useState(false);

    const handleOutsideClick = (e) => {
        if(!e.path.includes(burgerMenuRef.current)){
            setBurgerActive(false);
        }
    };
    React.useEffect( () => {
        document.body.addEventListener('click', handleOutsideClick);
        burgerActive ? document.body.classList.add('_lock') : document.body.classList.remove('_lock');
    }, [burgerActive]);

    return (
        <div ref={burgerMenuRef} className={burgerActive ? 'burger-menu _active' : 'burger-menu'} onClick={ ()=> (setBurgerActive(!burgerActive))}>
            <div className="burger-menu__icon--burger" onClick={ () => (setBurgerActive(!burgerActive))}>
                <span></span>
            </div>
            <div className="burger-menu__content" onClick={(e)=> e.stopPropagation()}>
                <nav className="burger-menu__nav ">
                    <h3 className="burger-menu__title">Меню</h3>
                    <ul className="burger-menu__list">
                        {navItems.map( (item) =>
                            <li key={item.name} className="burger-menu__item">
                                <Link to={item.href} className="burger-menu__link" onClick={ () => {console.log('111')} }>
                                    <span className={"burger-menu__icon " + item.iconClass}></span>
                                    <span>{item.value}</span>
                                </Link>
                            </li>
                        )}  
                    </ul>
                </nav>

                <div className="burger-menu__categories">
                    <h3 className="burger-menu__title">Категории</h3>
                    <ul className="burger-menu__list">
                        {categoriesItems.map( item => 
                            <li key={item.category} className="burger-menu__item">
                                <Link to={`/catalog/`} onClick={() => onChangeCategoryFilter(item.category, item.value)} className="burger-menu__link">
                                    <span className={"burger-menu__icon " + item.iconClass} ></span>
                                    <span>{item.value}</span>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu;