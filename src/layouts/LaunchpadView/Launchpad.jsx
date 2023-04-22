import React, { useState } from 'react';
import './cryptoview.css'
import LaunchpadHead from '../../components/launchpadView/LaunchpadHead';
import LaunchpadBody from '../../components/launchpadView/LaunchpadBody';

const LaunchpadView = ({item}) => {
    const [launchpadDetail, setLaunchpadDetail] = useState('actions')
    return (
        <>
           <LaunchpadHead launchpadDetail={launchpadDetail} setLaunchpadDetail={setLaunchpadDetail} item={item}/> 
           <LaunchpadBody launchpadDetail={launchpadDetail} setLaunchpadDetail={setLaunchpadDetail} item={item}/>
        </>
    );
}

export default LaunchpadView;
