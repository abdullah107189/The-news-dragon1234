import React, { useContext } from 'react';
import loddingImg from '../assets/loading.png'
import { AuthContext } from '../Provider/AuthProvider';
const Loading = () => {
    const { loading } = useContext(AuthContext)
    return (
        loading && <div className='bg-white bg-opacity-80 z-[10] flex justify-center items-center h-full w-full fixed '>
            <img className='animate-spin w-24 h-24' src={loddingImg} alt="" />
        </div>
    );
};

export default Loading;