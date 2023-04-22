import React from 'react';
import './form.css'
import './form_light.css'
import './form_dark.css'
import { icons } from '../../assets/icons/icon';

const SubscribeInput = ({...rest}) => {
    return (
        <div className="position-relative search_bar subscribe">
            <input className='input_search' {...rest} />
            <img src={icons.mail} alt="email" />
        </div>
    );
}

export default SubscribeInput;
