import React from 'react';
import './crypto.css'
import './crypto_light.css'
import './crypto_dark.css'
import cryptoData from '../../data/cryptoData';
import SingleCrypto from '../../components/crypto/SingleCrypto';

const Crypto = () => {
    return (
        <div className="mt-3 content">
            <div className="row">
            {
                cryptoData.map((item) => {
                    return(
                        <SingleCrypto key={item.id} item={item}/>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Crypto;
