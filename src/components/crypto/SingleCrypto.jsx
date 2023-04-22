import React from 'react';
import SingleCryptoHead from './SingleCryptoHead';
import SingleCryptoBody from './SingleCryptoBody';
import SingleCryptoFooter from './SingleCryptoFooter';

const SingleCrypto = ({item}) => {
    
    return (
        <div className="col-md-6 col-lg-4 col-12 mb-4">
            <SingleCryptoHead item={item}/>
            <SingleCryptoBody item={item}/>
            <SingleCryptoFooter item={item}/>
        </div>
    );
}

export default SingleCrypto;
