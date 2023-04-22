import React, { useContext } from "react";
import Ethereum from "../ethereum/Ethereum";
import Wallet from "../wallet/Wallet";
import CreateButton from "./CreateButton";
import { icons } from "../../assets/icons/icon";
import { Link } from "react-router-dom";
import { images } from "../../assets/images/images";
import { ThemeContext } from "../../App";
// import useWindowWidth from "../../hooks/useWindowWidth";

const TopBarResponsive = () => {
    const [context,setContext] = useContext(ThemeContext);
    // const onSmallScreen = useWindowWidth(767);
  return (
    <div className="d-flex align-items-center justify-content-between content pe-0 bg-shadow mb-3">
      <div className="d-flex align-items-center gap-2">
        <img className='pointer-event' onClick={() => setContext({...context,navBarOpen:true})} src={icons.menu_icon} alt="menu icon" />
        <Link to="/" className="logo d-flex align-items-center gap-2 pt-0">
                <img className="rounded" src={images.logo} alt="" />
                <h2 className="font-18">Xcel Pad</h2>
            </Link>
      </div>
      <div className="d-flex align-items-center">
        <Ethereum />
        <Wallet />
          <CreateButton marginLeft={false} />
      </div>
    </div>
  );
};

export default TopBarResponsive;
