import React from 'react';
import './componentlist.css';
import Item from "./ComponentItem/componentitem"


const List = ({ list, onStarChange }) => {
    const item = list.map(item => {
        return <Item
            key={item.id}
            name={item.name}
            address={item.address}
            avatar={item.avatar}
            phone={item.phone}
            email={item.email}
            gender={item.gender}
            favotite={item.favotite}
            onStarChange={() => onStarChange(item.id)}
        />;
    })

    return (
        <ul className="list-group pull-down" id="contact-list">
            {item}
        </ul>
    );
}

export default List;