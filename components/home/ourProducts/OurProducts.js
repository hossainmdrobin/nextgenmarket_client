import React from 'react';
import OurProductLeft from './OurProductLeft';
import OurProductRight from './OurProductRight';

const OurProducts = () => {
    return (
        <div className='mx-12 mt-52 min-h-screen flex-col flex md:flex-row'>
            <OurProductLeft />
            <OurProductRight />
        </div>
    );
}

export default OurProducts;
