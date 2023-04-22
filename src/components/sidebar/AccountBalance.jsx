import React from 'react';
import { images } from '../../assets/images/images';
import { Link } from 'react-router-dom';

const AccountBalance = () => {
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <Link to="/" className="bottom-logo px-0 d-flex align-items-center gap-2">
                <img className="rounded-circle" src={images.logo} alt="logo" />
                <h4>XL price:</h4>
            </Link>
            <div className="amount">
                <h4>$ 0.05</h4>
            </div>
        </div>
    );
}

export default AccountBalance;
