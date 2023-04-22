import React from 'react';
import Container from '../components/container/Container';
import { useParams } from 'react-router-dom';
import LaunchpadView from '../layouts/LaunchpadView/Launchpad';
import cryptoData from '../data/cryptoData';

const LaunchpadDetailsPage = () => {
    const {id} = useParams();
    const data = cryptoData.filter((item) => {return item.id == id});
    return (
        <Container>
            <LaunchpadView item={data[0]}/>
        </Container>
    );
}

export default LaunchpadDetailsPage;
