import React, { useContext } from 'react';
import googleImg from '../../../assets/google.png'
import githubImg from '../../../assets/github.png'
import facebook from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'
import instagram from '../../../assets/instagram.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const RightNav = () => {
    const { loginwithGoogle, loginwithGithub, user } = useContext(AuthContext);
    const handleLoginGoogle = () => {
        {
            user ? toast.error('you are already login') : loginwithGoogle()
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser)
                    toast.success('successfully login with google')
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    }

    const handleLoginGithub = () => {
        {
            user ? toast.error('you are already login') : loginwithGithub()
                .then(result => {
                    const loggeduser = result.user;
                    console.log(loggeduser)
                    toast.success('successfully login with github')
                })
        }
    }

    return (
        <div>
            {/* login provider  */}
            <div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <h1 className='text-2xl font-bold text-start mb-4'>Login</h1>
                <div>
                    <button onClick={handleLoginGoogle} className='flex gap-3 border hover:border-red-500 border-blue-400 px-3 py-2 rounded-lg justify-center w-full'>
                        <img className='w-6' src={googleImg} alt="" />
                        <p className='text-blue-500'>Login with Google</p>
                    </button>
                    <button onClick={handleLoginGithub} className='mt-2 flex gap-3 border hover:border-red-500 border-slate-500 px-3 py-2 rounded-lg justify-center w-full'>
                        <img className='w-6' src={githubImg} alt="" />
                        <p className='text-slate-500'>Login with Github</p>
                    </button>
                </div>
            </div>

            {/* find us on */}
            <h1 className='text-2xl'>Find Us On</h1>
            <div>
                <div>

                    <a className='p-3 border border-b-0 rounded-t-lg flex gap-3 items-center' href="https://www.facebook.com/abdullah.shamem.5" target='blank'>
                        <img className='w-8' src={facebook} alt="" />
                        Facebook
                    </a>
                </div>
                <div>

                    <a className='p-3 border border-b-0 flex gap-3 items-center' href="https://www.facebook.com/abdullah.shamem.5" target='blank'>
                        <img className='w-8' src={twitter} alt="" />
                        Twitter
                    </a>
                </div>
                <div>

                    <a className='p-3 border border-b-1 rounded-b-lg flex gap-3 items-center' href="https://www.instagram.com/abdullah.shamem/" target='blank'>
                        <img className='w-8' src={instagram} alt="" />
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RightNav;