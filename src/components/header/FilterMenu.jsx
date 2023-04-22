import React, { useState } from 'react';
import filterMenu from '../../data/filterMenuData';
import SwitchButton from '../form/SwitchButton';

const FilterMenu = () => {
    const [linkActive, setLinkActive] = useState(1)
    const [filterOption,setFilterOption] = useState(false);
    return (
        <div className="d-flex align-items-center content justify-content-between filter_menu">
            <div className="menu">
                <ul>
                    {
                        filterMenu.map((item) => {
                            return(
                                <li onClick={() => setLinkActive(item.id)} className={`${linkActive === item.id ? 'active' : ''}`} key={item.id}>{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div onClick={() => setFilterOption(!filterOption)} className={`advanced_filter d-flex align-items-center gap-2 pointer-event ${filterOption ? 'active':''}`}>
                <SwitchButton/>
                <p>Advanced mode</p>
            </div>
        </div>
    );
}

export default FilterMenu;
