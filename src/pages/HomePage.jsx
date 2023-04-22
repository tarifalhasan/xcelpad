import React, { useState } from "react";
import Container from "../components/container/Container";
import Header from "../layouts/Header/Header";
import SearchFilter from "../layouts/SearchFilter/SearchFilter";
import Crypto from "../layouts/Crypto/Crypto";
import useWindowWidth from "../hooks/useWindowWidth";
import SwitchButton from "../components/form/SwitchButton";

const HomePage = () => {
  const [filterOption,setFilterOption] = useState(false);
  const onSmallScreenMobile = useWindowWidth(767);
  return (
    <Container>
        <Header/>
        {
          onSmallScreenMobile ? <div onClick={() => setFilterOption(!filterOption)} className={`advanced_filter mt-2 content d-flex align-items-center gap-2 pointer-event ${filterOption ? 'active':''}`}>
                <SwitchButton/>
                <p>Advanced mode</p>
            </div> : ''
        }

        <SearchFilter/>
        <Crypto/>
    </Container>
  );
};

export default HomePage;
