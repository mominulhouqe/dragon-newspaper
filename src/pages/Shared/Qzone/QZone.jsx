import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='text-center bg-secondary p-2'>
            <h4 className='text-white mt-2 fw-bold'>Q-Zone</h4>
            <div>
                <img className='img-fluid' src={qzone1} alt="" />
                <img className='img-fluid'  src={qzone2} alt="" />
                <img className='img-fluid'  src={qzone3} alt="" />
            </div>
             
        </div>
    );
};

export default QZone;