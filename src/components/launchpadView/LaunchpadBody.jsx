import React from "react";
import LaunchpadDescription from "./LaunchpadDescription";
import LaunchpadAction from "./LaunchpadAction";
import { Link } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";
import { icons } from "../../assets/icons/icon";

const LaunchpadBody = ({ item, launchpadDetail }) => {
  const onSmallScreenMobile = useWindowWidth(767);
  
  return (
    <div className="content mt-4">
    {
      onSmallScreenMobile ?  <div className="d-flex align-items-center gap-3 mb-4">
            <p className={`text-capitalize status_text status_${item.status}`}>
              {item.status}
            </p>
            <div className="d-flex gap-2 align-items-center">
              <img src={icons.global} alt="global" />
              <img src={icons.medium} alt="medium" />
              <img src={icons.telegram} alt="telegram" />
              <img src={icons.twitter} alt="twitter" />
            </div>
          </div> :''
          }
      <div className={`row position-relative ${onSmallScreenMobile ? '' : 'mb-3'}`}>

        {
          onSmallScreenMobile ? 
          <>
            {
               launchpadDetail === 'description' ? <div className={`col-md-8 mb-responsive`}>
          <LaunchpadDescription item={item} />
        </div>
        :
        <div className="col-md-4 mb-responsive">
          <LaunchpadAction launchpadDetail={launchpadDetail} item={item} />
        </div>
            }
          </>
          :
          <>
          <div className={`col-md-8`}>
          <LaunchpadDescription item={item} />
        </div>
        
        <div className="col-md-4">
          <LaunchpadAction item={item} />
        </div>
          </>
        }


        

      </div>
      <div className="disclaimer  position-sticky">
          <div className="bg-white p-4 mx-large-4">
          <p className="font-16">
          <span className="cmnt_text_active">Disclaimer:</span> Xcel Pad will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. <Link className="read_more_text"><span className="font-16">Read more</span></Link>
          </p>
          </div>
        </div>
    </div>
  );
};

export default LaunchpadBody;
