import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item,id,itemFocus,itemId}) => {
    
    
    return (
        <li onClick={() => itemFocus(id)} className={`py-2 ${itemId === id ? 'active' :''}`}><Link to={item.route}><img className={`icon me-2`} src={item.icon} alt="icon" /> {item.title}</Link></li>
    );
}

export default Item;
