import React from 'react';
import Navigation from '../Pages/Navigation/Navigation';

import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <Navigation />
            <Outlet></Outlet>

        </div>
    );
};

export default Main;