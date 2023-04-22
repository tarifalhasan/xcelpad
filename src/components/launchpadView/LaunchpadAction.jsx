import React from 'react';
import { icons } from '../../assets/icons/icon';
import ProgressBar from '../progress/ProgressBar';
import LaunchpadValue from './LaunchpadValue';
import SubscribeInput from '../form/SubscribeInput';
import useWindowWidth from '../../hooks/useWindowWidth';

const LaunchpadAction = ({item, launchpadDetail}) => {
    const onSmallScreenMobile = useWindowWidth(767);

    return (
        <div className={`d-flex align-items-center gap-3 ${onSmallScreenMobile ? 'flex-row mx-width-rs mb-3 flex-wrap':'flex-column'}`}>
            <div className="p-4 bg-white w-100 h-100 mx-width">
            <div className="action_head text-center">
                <img src={icons.cancel} alt="" />
                <p className='font-14'>This pool has canceled</p>
                <div className="mt-3">
                    <ProgressBar progress={item.progress}/>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                        <p className="network_value">{item.value_min}{item.crypto_network}</p>
                        <p className="network_value">{item.value_max}{item.crypto_network}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-4 bg-white w-100 h-100 mx-width">
            <LaunchpadValue half_width={true} name={'Status'} value={item.status}/>
            <LaunchpadValue half_width={true} name={'Unsold token'} value={'0 CBEX'}/>
            <LaunchpadValue half_width={true} name={'Current Rate'} value={'1 ETH = 7,458.635 CBEX'}/>
            <LaunchpadValue half_width={true} name={'Total Contributors'} value={'930'}/>
        </div>

        <div className={`p-4 bg-white mx-width w-100 ${onSmallScreenMobile ? '' : 'mb-3'} h-100`}>
            <h4 className='font-16'>Newsletters</h4>
            <p className='font-12 my-3'>Sign up our mailing list to receive our new presales, features, tips and reviews for next 100x projects.</p>
            <SubscribeInput placeholder="Enter your email"/>
        </div>

        </div>
    );
}

export default LaunchpadAction;
