import React from 'react';
import ProgressBar from '../progress/ProgressBar';

const SingleCryptoBody = ({item}) => {
    return (
        <div className='crypto_body position-relative'>
            <p className="sale_status font-11">{item.sale_status}</p>

            <div className="mb-10">
                <p className="font-11 mb-2">{item.type}</p>
                <h4 className="network_price">{item.value_min}{item.crypto_network} - {item.crypto_network} {item.value_max}</h4>
            </div>
            <div className="mb-10">
                <p className='font-11 mb-2'>Progress ({item.progress}%)</p>
                <ProgressBar progress={item.progress}/>
                <div className="d-flex align-items-center justify-content-between">
                    <p className="network_value">{item.value_min}{item.crypto_network}</p>
                    <p className="network_value">{item.value_max}{item.crypto_network}</p>
                </div>
            </div>
            <div className="mb-10">
            <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="network_value">Liquidity</p>
                    <p className="network_value">{item.liquidity}%</p>
                </div>
            <div className="d-flex align-items-center justify-content-between">
                    <p className="network_value">LP Lockup Time</p>
                    <p className="network_value">{item.lockup_time}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleCryptoBody;
