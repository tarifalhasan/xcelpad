import React from 'react'
import Select from 'react-select'




const SelectInput = ({placeholder,options}) => {
    return (
        <Select placeholder={placeholder} options={options} />
    );
}

export default SelectInput;
