import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'
import FancyRoute from '../components/fancyroute/fancyroute';
const MainLayout = memo(() => {
    return (
        <div className='flex flex-col gap-4'>
            <Header/>
            <FancyRoute>
                <Outlet/>
            </FancyRoute>
            <Footer/>
        </div>
    );
});

MainLayout.displayName = 'MainLayout'
export default MainLayout;