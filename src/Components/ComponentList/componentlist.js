import React from 'react';
import './componentlist.css';
import Item from "./ComponentItem/componentitem"


const List = () => {
    return (
        <ul className="list-group pull-down" id="contact-list">
            <Item />
        </ul>
    );
}

export default List;