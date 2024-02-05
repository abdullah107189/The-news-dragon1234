import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-bold text-start mb-4'>All Caterogy</h1>
            <div className='text-start'>
                {
                    categories.map(category =>
                        <Link key={category.id} to={`/category/${category.id}`}>
                            <p className='px-6 py-3 rounded-lg hover:bg-slate-300 font-bold'>{category.name}</p>
                        </Link>)
                }
            </div>
        </div >
    );
};

export default LeftNav;