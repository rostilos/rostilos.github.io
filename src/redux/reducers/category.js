const initialState = {
    category : null,
    categoryTitle : 'Выберите категорию ...',
};


const category = ( state = initialState, action) => {
    if( action.type === 'SET_CATEGORY'){
        return{
            ...state,
            category : action.payload.category,
            categoryTitle : action.payload.categoryTitle
        }
    }
    return state;
}

export default category;