export const setSortBy = (name) => ({
    type : 'SET_SORT_BY',
    payload : name
});


export const setPrice = (minPrice, maxPrice) => ({
    type : 'SET_PRICE_FILTER',
    payload : {
        minPrice : minPrice,
        maxPrice : maxPrice
    }
});

export const resetFilters = () => ({
    type : 'RESET_FILTERS',
});

