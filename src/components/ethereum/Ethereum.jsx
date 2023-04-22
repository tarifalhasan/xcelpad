import React, { useContext } from 'react';
import { icons } from '../../assets/icons/icon';
import { ThemeContext } from '../../App';

const Ethereum = () => {
    const [context,setContext] = useContext(ThemeContext)
    return (
        <div className="d-flex align-items-center gap-3 wallet p-16 mr-1 pointer-event">
            <img className='ethereum' src={context.theme === 'light' ? icons.ethereum : icons.ethereum_light} alt="ethereum" />
            <img className='dwn_arrow' src={icons.down_arrow} alt="" />
        </div>
    );
}

export default Ethereum;
