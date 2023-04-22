import React from "react";
import SelectInput from "../../components/form/SelectInput";
import Input from "../../components/form/Input";
import useWindowWidth from "../../hooks/useWindowWidth";
import { icons } from "../../assets/icons/icon";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'milk', label: 'Milk' }
  ]

const SearchFilter = () => {
  const onSmallScreen = useWindowWidth(992);
  return (
    <div className={`content ${onSmallScreen ? 'mt-2':'mt-4 '}`}>
      <div className={`d-flex align-items-center justify-content-between ${onSmallScreen ? 'gap-2':''}`}>
        <div className={`w-45 ${onSmallScreen ? 'w-100' : ''}`}>
            <p className="mb-2 title_text">Search</p>
            <Input placeholder="Enter token name or token symbol" type="text" />
        </div>
        {
          onSmallScreen ? 
          <div>
            <img className="filter_icon" src={icons.filter_icon} alt="" />
          </div> 
          :
          <div className="d-flex align-items-center gap-2">

          <div>
            <p className="mb-2 title_text">Filter by</p>
            <SelectInput options={options} placeholder={'Select'} />
          </div>

          <div>
            <p className="mb-2 title_text">Sort by</p>
            <SelectInput options={options} placeholder={'Select'} />
          </div>

          <div>
            <p className="mb-2 title_text">Chain</p>
            <SelectInput options={options} placeholder={'Select'} />
          </div>

        </div>
        }
      </div>
    </div>
  );
};

export default SearchFilter;
