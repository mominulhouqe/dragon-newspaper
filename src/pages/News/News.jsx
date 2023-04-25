import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import {FaArrowAltCircleLeft } from 'react-icons/fa';
import NewsEiditor from './NewsEiditor/NewsEiditor';

const News = () => {
    const news = useLoaderData()
    const { _id,  title, details, image_url ,category_id} = news;



    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title} </Card.Title>
                    <Card.Text>
                        {
                            details
                        }
                    </Card.Text>
                   <Link to={`/category/${category_id}`}> <button className='btn btn-danger'> <FaArrowAltCircleLeft /> All News in this Catagorys</button></Link>
                </Card.Body>        
            </Card>
            <div className='mt-4'>
            <NewsEiditor />
            </div>
        </div>
    );
};

export default News;