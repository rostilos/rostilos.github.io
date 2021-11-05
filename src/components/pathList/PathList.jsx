import React, { useState } from 'react';


function PathList(props) {

    let styleName = props.className ? props.className : '';


    return ( 
        <h1 className={styleName}>Path List</h1>
    )
}

export default PathList;
