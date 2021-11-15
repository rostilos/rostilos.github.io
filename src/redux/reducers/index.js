import {combineReducers } from 'redux';

import filtersReducer from './filters';
import productsReducer from './products';
import categoryReducer from './category';


const rootReducer = combineReducers ({
    filters : filtersReducer,
    products : productsReducer,
    category :  categoryReducer,
})

export default rootReducer;