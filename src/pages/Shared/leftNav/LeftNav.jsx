import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://the-news-dragon-server-eight-kohl.vercel.app/catagrories')
        .then(res => res.json())
        .then(data =>setCategories(data))
    }, [])

    return (
        <div>
            <h4>All Categories </h4>
            
            <div className=''>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            
            </div>
        </div>
    );
};

export default LeftNav;
