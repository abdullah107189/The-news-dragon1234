import React from 'react';
import RightNav from '../page/Shared/Navbar/RightNav';
import { Outlet } from 'react-router-dom';
import Header from '../page/Shared/Header/Header';

const NewLayout = () => {
    return (
        <div className='mx-auto container px-4'>
            <Header></Header>
            <h1 className='font-bold text-2xl'>Dragon News</h1>
            <div className='grid grid-cols-12 gap-3 text-center'>
                <div className='col-span-9'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3'><RightNav></RightNav></div>
            </div>
        </div>
    );
};

export default NewLayout;