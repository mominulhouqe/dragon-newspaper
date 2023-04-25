import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaShare, FaEye,FaStarHalfAlt, FaStar, FaStarOfDavid} from 'react-icons/fa';
import moment from 'moment';
import Rating from 'react-rating';


const NewsCard = ({ news }) => {
    const { _id, name, title, details, image_url, author, total_view, rating } = news;

    return (
        <>
            <Card className="mb-3">
                <Card.Header className='d-flex gap-3 align-items-center'>
                    <Image style={{ height: "40px" }} src={author?.img} roundedCircle />

                    <div className='flex-grow-1'>

                        <h5>{author?.name} </h5>
                        <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>

                    </div>

                    <div>
                        <FaBookmark ></FaBookmark>
                        <FaShare />
                    </div>


                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> :
                            <>
                                {details.slice(0, 250)} ...
                            </>

                        }
                        <Link to={`/news/${_id}`} >Read More</Link>
                    </Card.Text>


                </Card.Body>

                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={ <FaStarHalfAlt />}
                            placeholderSymbol={ <FaStar className='text-warning' /> }
                            fullSymbol={  <FaStar /> }
                        />
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye /> {total_view}
                    </div>
                </Card.Footer>
            </Card>

        </>
    );
};

export default NewsCard;