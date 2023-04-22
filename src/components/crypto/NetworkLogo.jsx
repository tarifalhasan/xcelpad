import React from 'react';

const NetworkLogo = ({item}) => {
    return (
        <div className="network_icon">
                    <img src={item.image} alt="icon" />
                    <img className='network_name_icon' src={item.network_image} alt="network icon" />
                </div>
    );
}

export default NetworkLogo;
