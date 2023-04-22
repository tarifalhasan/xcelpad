import React from "react";

const LaunchpadValue = ({ name, value,half_width }) => {
  return (
    <div className="d-flex align-items-center mb-2 border-bottom border-2 pb-2 last-item-no-border">
      <p className={`${half_width ? 'w-40':'w-35'} font-13`}>{name}</p>
      <p className="font-13">{value}</p>
    </div>
  );
};

export default LaunchpadValue;
