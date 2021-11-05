const initialState = {
    category : null,
    categoryTitle : 'Выберите категорию ...',
    sortBy : 'popular',
    price : {
        from : false,
        to : false,
    },
};


const filters = ( state = initialState, action) => {
    if( action.type === 'SET_SORT_BY'){
        return{
            ...state,
            sortBy : action.payload
        }
    }
    if( action.type === 'SET_CATEGORY'){
        return{
            ...state,
            category : action.payload.category,
            categoryTitle : action.payload.categoryTitle
        }
    }
    if( action.type === 'SET_PRICE_FILTER'){
        return{
            ...state,
            price : {
                from : action.payload.minPrice,
                to : action.payload.maxPrice,
            },
        }
    }
    if( action.type === 'RESET_FILTERS'){
        return{
            ...initialState
        }
    }
    return state;
}

export default filters;