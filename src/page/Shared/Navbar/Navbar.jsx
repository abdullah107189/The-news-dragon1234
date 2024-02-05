import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../../assets/user.png'
import toast from 'react-hot-toast';
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from '../../../Provider/AuthProvider';
import app from '../../../firebase/firebase.config';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const auth = getAuth(app);
    const handleSingOut = () => {
        signOut(auth)
            .then(() => {
                toast.success('logOut seccessfully done!')
            }).catch((error) => {
                console.log(error.message)
            });
    }
    return (
        <div className='grid grid-cols-3'>
            <div></div>
            <div className='text-center text-slate-500 font-semibold'>
                <button className='text-2xl mx-3 hover:text-red-500'><Link to={'/'}>Home</Link></button>
                <button className='text-2xl mx-3 hover:text-red-500'> <Link to={'/about'}>About</Link></button>
                <button className='text-2xl mx-3 hover:text-red-500'><Link to={'/career'}>Career</Link></button>
            </div>

            <div className='flex gap-3 justify-end'>
                <img className='w-10 h-10 rounded-full' src={user ? user.photoURL : userIcon} alt="" />
                {user ?
                    <button onClick={handleSingOut} className='px-6 font-bold text-white bg-slate-700 rounded-sm hover:bg-red-500'>LogOut</button>
                    :
                    <Link to={'/auth/login'} className='px-6 font-bold text-white bg-slate-700 rounded-sm hover:bg-red-500 flex'>
                        <button>Login</button>
                    </Link>}

            </div>

        </div>
    );
};

export default Navbar;