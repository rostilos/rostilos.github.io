import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { setCategory} from '../../redux/actions/filters';
import { setPrice} from '../../redux/actions/filters';
import { resetFilters} from '../../redux/actions/filters';



function SectionFilter(props) {

    const selectItems = props.items;
    const dispatch = useDispatch();
    
    const [showSelectList, setShowSelectList] = useState(false);
    const {categoryTitle} = useSelector ( (state) => {
        return {
            categoryTitle : state.filters.categoryTitle
        }
    } );

    const toggleSelectList = () => {
        setShowSelectList(!showSelectList);
    }
    const onChangeCategoryFilter = (category , categoryTitle) => {
        dispatch( setCategory(category , categoryTitle) );
        setShowSelectList(false);
    }
    const onChangePriceFilter = (minPrice, maxPrice) => {
        dispatch( setPrice(minPrice, maxPrice) );
    }

    
    //ОЧИСТКА ВСЕХ ФИЛЬТРОВ ПРИ УДАЛЕНИИ КОМПОНЕНТА
    React.useEffect ( () => {
        return () => dispatch(resetFilters());
    },[]);

    return ( 
        <div  className='section-filter filter'>
            <div className="filter__select select-filter">
            
                <ul className={showSelectList ? "select-filter__list _active" : "select-filter__list"}>
                    {selectItems.map( (item) => (
                        <li key={item.category} onClick={() => onChangeCategoryFilter(item.category, item.value)} className="select-filter__option">
                            <p category={item.category}>{item.value}</p>
                        </li>
                    ) )}
                </ul>
                <div onClick={toggleSelectList} className="select-filter__placeholder">
                    {categoryTitle}
                </div>
                
            </div>
            <button onClick={() => onChangePriceFilter(0, 10000)} className="select-filter__placeholder">
                <span> Change MaxPrice to 10,000!</span>
            </button>
        </div>
    )
}

export default SectionFilter;
