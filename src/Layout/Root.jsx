import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Pages/Share/Navber';
import Footer from '../Pages/Share/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;