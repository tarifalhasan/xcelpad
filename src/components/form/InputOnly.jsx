import React from 'react';
import './form.css'
import './form_dark.css'
import './form_light.css'
const InputOnly = ({placeholder}) => {
    return (
        <input className='only' type="text" placeholder={placeholder} />
    );
}

export default InputOnly;
