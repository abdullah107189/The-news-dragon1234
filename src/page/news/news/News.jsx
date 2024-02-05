import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ribbon from '../../../assets/ribbon.png'
import share from '../../../assets/share.png'
import { FaArrowLeft } from "react-icons/fa";

const News = () => {
    const news = useLoaderData();
    const { _id, title, category_id, rating, total_view, author, thumbnail_url, image_url, details } = news;
    return (
        <div>
            <div className='border border-stone-200 rounded-lg my-4 shadow-lg'>
                {/* user info */}
                <div className='flex justify-between items-center bg-slate-100 p-3 rounded-t-lg'>
                    <div className='flex gap-4'>
                        <img className='w-10 h-10 rounded-full' src={author.img} alt="" />
                        <div className='text-start'>
                            <h1 className='font-bold text-slate-500'>{author.name}</h1>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <button>  <img className='w-4' src={ribbon} alt="" /></button>
                        <button> <img className='w-4' src={share} alt="" /></button>
                    </div>
                </div>

                <div className='p-3'>
                    <h1 className='text-xl text-start my-3 font-bold text-slate-800'>{title}</h1>

                    <img src={image_url} alt="" />
                    <div className='text-start'>
                        {details}
                    </div>
                    <Link to={`/category/${category_id}`}>
                        <button className='bg-red-500 px-4 py-2 font-bold text-white flex items-center justify-center gap-3 my-4'>
                            <FaArrowLeft />
                            All news in this category
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default News;