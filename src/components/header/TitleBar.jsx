import React, { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import SelectInput from '../form/SelectInput';

const options = [
    { value: 'all_type', label: 'All Type' },
    { value: 'pre_seals', label: 'Presale' },
    { value: 'fair_launch', label: 'Fair Launch' },
    { value: 'private_sale', label: 'Private Sale' }
  ]

const TitleBar = () => {
    const [filter,setFilter] = useState('all')
    const onSmallScreenMobile = useWindowWidth(767);

    
    return (
        <div className={`content ${onSmallScreenMobile ? 'pb-3 ' : 'd-flex align-items-center gap-2'}`}>
            <h2 className='title mr-20'>Launchpads</h2>
            {
                onSmallScreenMobile ? <div className='d-flex align-items-center gap-2 select-type pt-2'>
                    <SelectInput options={options} placeholder={'Select'}/>
                    <SelectInput options={options} placeholder={'Select'}/>
                </div> :
            <div className="filter_btn_wrap">
                <button className={`${filter === 'all' ? 'active':''}`} onClick={() => setFilter('all')}>All (200)</button>
                <button className={`${filter === 'my' ? 'active':''}`} onClick={() => setFilter('my')}>My (4)</button>
            </div>
            }
        </div>
    );
}

export default TitleBar;
