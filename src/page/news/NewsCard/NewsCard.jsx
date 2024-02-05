import React from 'react';
import ribbon from '../../../assets/ribbon.png'
import share from '../../../assets/share.png'
import eye from '../../../assets/eye.png'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const { _id, title, rating, total_view, author, thumbnail_url, image_url, details } = news;
    return (
        <div className='border border-stone-200 rounded-lg'>
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
                    {details.length < 200 ? <p> {details}</p> : <p>{details.slice(0, 100)}...<Link to={`/news/${_id}`} className='text-orange-400 font-bold block'> Read more</Link></p>}
                </div>
                <hr className='my-2' />
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <Rating
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                            readonly
                        ></Rating>
                        <h1>{rating.number}</h1>
                    </div>
                    <div className='flex gap-2'>
                        <img className='w-4' src={eye} alt="" />
                        <h1>{total_view}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;