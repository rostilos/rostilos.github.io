export const setCategory = (category , categoryTitle) => ({
    type : 'SET_CATEGORY',
    payload : {
        category : category,
        categoryTitle : categoryTitle
    }
});
