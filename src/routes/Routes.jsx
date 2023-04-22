import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LaunchpadDetailsPage from '../pages/LaunchpadDetailsPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomePage/>}/>
          <Route path="/launchpad-view/:id" element={<LaunchpadDetailsPage/>}/>
          {/* <Route path="*" element={<NotFoundB/>} /> */}
        </Routes>
      </BrowserRouter>
    );
}

export default AppRoutes;
