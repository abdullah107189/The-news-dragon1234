import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const Register = () => {

    const { signUp } = useContext(AuthContext)
    const [accecpted, setAccepted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        if (password !== confirm_password) {
            toast.error('password incorrect')
        }
        if (password.length < 6) {
            toast.error('password minimum 6 letter')
        }

        signUp(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success('Successfully Registetion!')
                verifyEmail(loggedUser)
                updateUserProfile(loggedUser, username, photoURL)
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
            })
    };
    const updateUserProfile = (user, name, photoURL) => {
        updateProfile(user, {
            displayName: name, photoURL: photoURL
        })
            .then(() => {
            })
            .catch((error) => {
                console.log(error.message)
            });
    }
    const verifyEmail = (user) => {
        sendEmailVerification(user)
            .then(() => {
                toast.success('please verified your Email')
            });
    }
    const handleAgree = (e) => {
        setAccepted(e.target.checked)
    }
    return (
        <div className='p-10 bg-white my-4 w-[75%] mx-auto rounded-md'>

            <h1 className='text-3xl text-center font-bold text'>Register your account</h1>
            <hr className='my-9' />
            <form onSubmit={handleSubmit} className='px-6'>
                <div className='mb-5'>
                    <label className='font-bold text-slate-600 block my-2 text-xl'>Your Name</label>
                    <input
                        className='bg-[#F3F3F3] p-3 w-full rounded-md'
                        type="text"
                        name="username"
                        placeholder='Enter your email address'
                        required
                    />
                </div>

                <div className='mb-5'>
                    <label className='font-bold text-slate-600 block my-2 text-xl'>Photo URL</label>
                    <input
                        className='bg-[#F3F3F3] p-3 w-full rounded-md'
                        type="url"
                        name="photoURL"
                        placeholder='Enter your email address'
                        required
                    />
                </div>

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

                <div className='mb-5'>
                    <label className='font-bold text-slate-600 block my-2 text-xl'>Confirm Password</label>
                    <input
                        className='bg-[#F3F3F3] p-3 w-full rounded-md'
                        type="password"
                        name="confirm_password"
                        placeholder='Enter your email address'
                        required
                    />
                </div>
                <div className="mb-4">

                    <input
                        type="checkbox"
                        name="agree"
                        onClick={handleAgree}
                        className="mr-2 leading-tight"
                    />
                    <label className="text-sm">I agree to the <Link className='text-blue-400 font-bold' to={'/auth/terms'}>terms and conditions</Link></label>
                </div>

                <button className='w-full rounded-md bg-[#403F3F] py-3 text-white font-bold text-xl' disabled={!accecpted} type="submit">Register</button>

                <div className='text-center font-bold text-slate-500 my-5'>Have An Account ? <Link className='text-red-400' to={'/auth/login'}>Login</Link></div>
            </form>
        </div>
    );
};

export default Register;