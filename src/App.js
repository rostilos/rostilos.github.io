import React, { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import ProductView from './pages/ProductView';

import  { connect } from 'react-redux';
import { useDispatch} from 'react-redux';
import { setProducts } from './redux/actions/products';



import './scss/main.scss';

function App(props) {
    const categories = [
        {
            value : 'Кухни',
            category : 'kitchen',
            iconClass : '_icon-kitchen'
        },
        {
            value : 'Спальни',
            category : 'bedroom',
            iconClass : '_icon-bedroom'
        },
        {
            value : 'Гостинные',
            category : 'livingroom',
            iconClass : '_icon-livingroom'
        },
        {
            value : 'Прихожие',
            category : 'closet',
            iconClass : '_icon-closet'
        },
        {
            value : 'Офисная мебель',
            category : 'office',
            iconClass : '_icon-office'
        },
        {
            value : 'Детская',
            category : 'childrensroom',
            iconClass : '_icon-childrensroom'
        }
    ];
    const navItems = [
        {
            name : "main",
            value : 'Главная',
            href : '/',
            iconClass : '_icon-bedroom'
        },
        {
            name : "about",
            value : 'О нас',
            href : '/about',
            iconClass : '_icon-bedroom'
        },
        {
            name : "contacts",
            value : 'Контакты',
            href : '#',
            iconClass : '_icon-bedroom'
        }
    ];

    const dispatch = useDispatch();

    //ПОЛУЧЕНИЕ ВСЕХ ПРОДУКТОВ ИЗ JSON И ПЕРЕДАЧА В REDUX
    React.useEffect( ()=> {
        const url = "/json/products.json";
        fetch(url)
            .then( (res) => res.json() )
            .then( 
                (result) => {
                    // setProductItems(result.items);
                    dispatch(setProducts(result.items));
                }
            );
    }, []);

    return (
        <div className='App'>
            <Header navItems={navItems} categories={categories} />
            <main className="main">
                <Route exact component={Home} path="/"/>
                <Route render={ (routeProps)=> <Catalog categories={categories} {...routeProps}/>} path="/catalog/"/>
                <Route component={About} path="/about/"/>
                <Route component={ProductView} path="/product/:id"/>
            </main>
            <Footer categories={categories}/>
        </div>
    );
}


// const mapStateToProps = state => {
//     return {
//         items : state.products.items
//     }
// }

export default App;
