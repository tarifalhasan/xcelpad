import React from "react";
import socialIcon from "../../data/followUsData";
import { Link } from "react-router-dom";

const Follow = () => {
  return (
    <div>
      <p className="ps-8">Follow us</p>
      <div className="d-flex align-items-center justify-content-between ps-8">
        {socialIcon.map((item) => {
          return (
            <Link to={item.route} key={item.id}>
              <img src={item.icon} alt="icon" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Follow;
