import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../page/news/NewsCard/NewsCard';

const Category = () => {
    const categories = useLoaderData();

    return (
        <div className='space-y-2'>
            {
                categories.map(news => <NewsCard
                    key={news._id}
                    news={news}

                ></NewsCard>)
            }
        </div>
    );
};

export default Category;