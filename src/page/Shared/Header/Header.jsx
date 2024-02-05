import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import Navbar from '../Navbar/Navbar';
const Header = () => {
    return (
        <div className='mx-auto space-y-3'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-slate-500 text-center'>Journalism Without Fear or Favour</p>
            <div className='flex gap-1 justify-center'>
                <p className='font-bold'>{moment().format("dddd,")}</p>
                <p className='font-semibold text-slate-500'>{moment().format("MMMM DD, YYYY")}</p>
            </div>
            <div className='flex items-center bg-slate-200 md:p-4 p-2 rounded-md gap-2'>
                <button className='border border-red-500 px-2 py-1 rounded-md bg-red-500 text-white font-bold'>Latest</button>
                <Marquee speed={50}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus mollitia possimus id libero consequuntur soluta, nulla tempore velit inventore laudantium ipsa laborum vero voluptatibus numquam dolor dolorum accusamus, quidem reiciendis sapiente! Rem provident dolores fugiat saepe nesciunt possimus mollitia recusandae. Nisi quisquam minus blanditiis laudantium expedita velit explicabo voluptatem incidunt iusto facilis laboriosam, nostrum, assumenda iure quibusdam sequi nesciunt excepturi in nemo dolorum modi minima voluptas recusandae non! Nam iusto soluta, nulla nisi ipsam eius ipsa nobis esse ad minima enim? Aliquam distinctio a eaque commodi iure! Natus commodi odio libero eaque velit facere animi cum quaerat eum qui.
                </Marquee>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;