import React, { useState } from 'react';
import ProductsList from '../components/products/ProductsList';
import Filters from '../components/filters/Filters';
import PathList from '../components/pathList/PathList';
import Sort from '../components/sort/Sort';
import { useSelector } from 'react-redux';

const Catalog = function (props) {

    const {products , category, filters} = useSelector( (state) => {  
        return {
            products : state.products.items,
            category : state.category.category,
            filters : state.filters,
        }
    });

    const [productsByCategory, setProductsByCategory] = useState([]);
    const [productsToShow , setProductsToShow] = useState([]);

    React.useEffect ( () => {   
        if(category){
            const productsByCategory = products.filter( (product) => product.category == category );
            setProductsByCategory(productsByCategory);
            setProductsToShow(productsByCategory);


        } else{
            setProductsByCategory(products);
            setProductsToShow(products);
        }
    } , [category , products]);


    const onChangeFilters = () => {
        const filteredProducts = productsByCategory.filter( (product) => {
            return (
                (filters.price.from ? parseInt(product.price) >= parseInt(filters.price.from) : true) &&
                (filters.price.to ? parseInt(product.price) <= parseInt(filters.price.to) : true)
            )
        }); 
        setProductsToShow(filteredProducts);
    }
   
    return ( 
        <div className="catalog-page">
            <div className="catalog-page__container _container">
                {/* <PathList className='catalog-page__path-list'/> */}
                <aside className="catalog-page__side">
                    <Filters 
                        productsToShow={productsToShow} 
                        productsByCategory={productsByCategory} 
                        categories={props.categories}
                        onChangeFilters={onChangeFilters}
                    />
                </aside>
                
                {/* <Sort className='catalog-page__sort'/> */}
                <div className="catalog-page__products">
                    <ProductsList items={productsToShow} />
                </div>
            </div>
        </div>
    )
}

export default Catalog;
