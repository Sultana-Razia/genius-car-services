import React from 'react';
import sleeping from '../../../images/sleeping.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center position-absolute top-50 start-50'>Mechanic is Sleeping</h2>
            <img className='w-100 h-50' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;