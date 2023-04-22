import React from 'react';
import { icons } from '../../assets/icons/icon';
import useWindowWidth from '../../hooks/useWindowWidth';

const CreateButton = ({marginLeft}) => {
    const onSmallScreenMobile = useWindowWidth(767);

    return (
        <button type='submit' className={`${onSmallScreenMobile ? 'position_bottom':''} d-flex align-items-center create_button ${marginLeft ? 'ml-20':''} gap-2 p-22`}>
            <img src={icons.plus} alt="" />
            {onSmallScreenMobile ? '' : <p>Create</p>}
        </button>
    );
}

export default CreateButton;
