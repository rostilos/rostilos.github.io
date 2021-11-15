import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { setCategory} from '../../redux/actions/category';


function SectionFilter(props) {

    const selectItems = props.items;
    const dispatch = useDispatch();
    
    const [showSelectList, setShowSelectList] = useState(false);
    const {categoryTitle} = useSelector ( (state) => {
        return {
            categoryTitle : state.category.categoryTitle
        }
    } );

    const toggleSelectList = () => {
        setShowSelectList(!showSelectList);
    }
    const onChangeCategoryFilter = (category , categoryTitle) => {
        dispatch( setCategory(category , categoryTitle) );
        setShowSelectList(false);
    }
  
    return ( 
        <div className='section-filter'>
            <div className="section-filter__select filter-select">
                <ul className={showSelectList ? "filter-select__list _active" : "filter-select__list"}>
                    {selectItems.map( (item) => (
                        <li key={item.category} onClick={() => onChangeCategoryFilter(item.category, item.value)} className="filter-select__option">
                            <p category={item.category}>{item.value}</p>
                        </li>
                    ) )}
                </ul>
                <div onClick={toggleSelectList} className="filter-select__placeholder">
                    {categoryTitle}
                </div>
                
            </div>
        </div>
    )
}

export default SectionFilter;
