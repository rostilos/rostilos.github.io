import React, { useState } from 'react';
import ProductsList from '../components/products/ProductsList';
import Filters from '../components/filters/Filters';
import PathList from '../components/pathList/PathList';
import Sort from '../components/sort/Sort';
import { useSelector , useDispatch } from 'react-redux';

const Catalog = function (props) {

    // const id = props.match.params.id;

    const {products , category, filters} = useSelector( (state) => {  
        return {
            products : state.products.items,
            category : state.filters.category,
            filters : state.filters,
        }
    });
    const [productsToShow , setProductsToShow] = useState([]);

    React.useEffect ( () => {   
        if(category){
            const filteredProducts = products.filter( (product) => {
                return (
                    product.category == category &&
                    (filters.price.from ? parseInt(product.price) >= parseInt(filters.price.from) : true) &&
                    (filters.price.to ? parseInt(product.price) <= parseInt(filters.price.to) : true)
                )
            }); 
            setProductsToShow(filteredProducts);
        } else{
            setProductsToShow(products);
        }
    } , [ products , filters]);

   
    return ( 
        <div className="catalog-page">
            <div className="catalog-page__container _container">
                {/* <PathList className='catalog-page__path-list'/> */}
                <aside className="catalog-page__side">
                    <Filters categories={props.categories}/>
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
