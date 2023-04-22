import React from 'react';
import { icons } from '../../assets/icons/icon';
import './form.css'
import './form_light.css'
import './form_dark.css'

const Input = ({...rest}) => {
    return (
        <div className="position-relative search_bar">
            <img src={icons.search} alt="search" />
            <input className='input_search' {...rest} />
        </div>
    );
}

export default Input;
