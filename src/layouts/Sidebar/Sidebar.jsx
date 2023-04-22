import React, { useContext, useState } from 'react';
import './sidebar.css'
import './sidebar_light.css'
import './sidebar_dark.css'
import sidebarItem from '../../data/SidebarData';
import Item from '../../components/sidebar/Item';
import { images } from '../../assets/images/images';
import { Link } from 'react-router-dom';
import Follow from '../../components/sidebar/Follow';
import Bottom from '../../components/sidebar/Bottom';
import { ThemeContext } from '../../App';
import useWindowWidth from '../../hooks/useWindowWidth';
import { icons } from '../../assets/icons/icon';



const Sidebar = ({selected}) => {
    const [itemId, setItemId] = useState(selected)
    const itemFocus = (id) => {
        setItemId(id)
    }
    const [context,setContext] = useContext(ThemeContext);
    const onSmallScreen = useWindowWidth(1200);
    return (
        <div onClick={() => console.log('')} className={`${context.navBarOpen && onSmallScreen ? 'shadow-overlay' : ''}`}>
        <div className={`left_side_bar ${context.navBarOpen && onSmallScreen ? 'active':''}`}>
            

            {
                onSmallScreen ? <img className='pointer-event' onClick={() => setContext({...context,navBarOpen:false})}  src={icons.cross_icon} alt="cross icon" /> : 
                <Link to="/" className="logo d-flex align-items-center gap-2 pt-0 mt-1">
                <img className="rounded" src={images.logo} alt="" />
                <h2>Xcel Pad</h2>
            </Link>
            }
            <ul>
                {
                    sidebarItem.map((item,index) => <Item itemId={itemId} itemFocus={itemFocus} key={item.id} id={index} item={item}/>)
                }
            </ul>
            <hr />
                <Follow/>
                <Bottom/>
        </div>
        </div>
    );
}

export default Sidebar;
