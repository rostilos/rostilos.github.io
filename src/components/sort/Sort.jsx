import React, { useState } from 'react';


function Sort(props) {
    let styleName = props.className ? props.className : '';


    return ( 
        <div className="sort">
            <button>Популярность</button>
            <button>Алфавит</button>
            <button>Цена</button>
        </div>   
    )
}

export default Sort;
