import React from 'react';
import Footer from '../page/Shared/Footer/Footer';
import LeftNav from '../page/Shared/Navbar/LeftNav';
import RightNav from '../page/Shared/Navbar/RightNav';
import { Outlet } from 'react-router-dom';
import Header from '../page/Shared/Header/Header';
import Loading from '../Components/Loading';

const Main = () => {
    return (
        <div >
            <Loading></Loading>
            <div className='container mx-auto px-4'>
                <Header></Header>
                <div className='grid grid-cols-12 gap-3 text-center'>
                    <div className='col-span-3'><LeftNav></LeftNav></div>
                    <div className='col-span-6'>
                        <h1 className='text-2xl font-bold text-start mb-4'>Dragon News Home</h1>
                        <Outlet></Outlet>
                    </div>
                    <div className='col-span-3'><RightNav></RightNav></div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;