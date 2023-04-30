import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h4>Terms and condition</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsam unde excepturi obcaecati. Delectus quod, blanditiis ex veniam quo vero omnis aliquid vel nam suscipit tenetur sed cumque? Aperiam esse pariatur optio totam cumque repudiandae, est rem earum debitis, animi eius voluptatem! Non animi dolores veritatis. Nesciunt cum adipisci autem.</p>
            <button className='btn btn-success '>Go back to <Link className='text-warning' to='/register'>Register</Link> </button>
        </div>
    );
};

export default Terms;