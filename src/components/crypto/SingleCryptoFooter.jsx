import React from 'react';
import Countdown from 'react-countdown';
import { icons } from '../../assets/icons/icon';
import { Link } from 'react-router-dom';

const SingleCryptoFooter = ({item}) => {
    return (
        <div className='crypto_footer d-flex align-items-center justify-content-between'>
            <div className="end_time">
                <p className="font-11">Sale ends in:</p>
                <Countdown date={item.end_date} />
            </div>
            <div className="crypto_footer_btn d-flex align-items-center gap-2">
            {
                item.love ? <button className='love'><img src={icons.love} alt="love icon" /></button> : ''
            }
            
                <button className='notify'><img src={icons.bell} alt="bell" /></button>
                <Link to={`/launchpad-view/${item.id}`}><button className='view'>View</button></Link>
            </div>
        </div>
    );
}

export default SingleCryptoFooter;
