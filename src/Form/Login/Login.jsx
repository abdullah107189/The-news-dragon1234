import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success('Successfully logged!')
                navigate(from, { replace: true });
                form.reset()

            })
            .catch(error => {
                console.log(error.message)
            })
    };
    return (
        <div className='p-10 bg-white my-4 w-[75%] mx-auto rounded-md'>

            <h1 className='text-3xl text-center font-bold text'>Login your account</h1>
            <hr className='my-9' />

            <form onSubmit={handleSubmit} className='px-6'>

                <div className='mb-5'>
                    <label className='font-bold text-slate-600 block my-2 text-xl'>Email</label>
                    <input
                        className='bg-[#F3F3F3] p-3 w-full rounded-md'
                        type="email"
                        name="email"
                        placeholder='Enter your email address'
                        required
                    />
                </div>

                <div className='mb-5'>
                    <label className='font-bold text-slate-600 block my-2 text-xl'>Password</label>
                    <input
                        className='bg-[#F3F3F3] p-3 w-full rounded-md'
                        type="password"
                        name="password"
                        placeholder='Enter your email address'
                        required
                    />
                </div>
                <button className='font-semibold text-stone-500 mb-5'>Forget password</button>
                <button className='w-full rounded-md bg-[#403F3F] py-3 text-white font-bold text-xl' type="submit">Login</button>

                <div className='text-center font-bold text-slate-500 my-5'>Dont’t Have An Account ? <Link className='text-red-400' to={'/auth/reg'}>Register</Link></div>
            </form>
        </div>
    );
};

export default Login;