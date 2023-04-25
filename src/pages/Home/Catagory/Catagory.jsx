import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../newsCard/NewsCard';

const Catagory = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();

    return (
        <div>
            {
                id &&
                <h4>Catagroys Name :{categoryNews.length} </h4>
            }
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}

                ></NewsCard>)
            }
        </div>
    );
};

export default Catagory;