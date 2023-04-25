import React from 'react';
import { useParams } from 'react-router-dom';

const Catagory = () => {
    const {id} = useParams();

    return (
        <div>
            <h4>Catagroy comming soon : {id}</h4>
        </div>
    );
};

export default Catagory;