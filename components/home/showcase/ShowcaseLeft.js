import React from 'react';
import MainCard from '../../shared/cards/MainCard';
import p1 from "./../../../assets/images/p1.png"
import p2 from "./../../../assets/images/p2.png"
import p3 from "./../../../assets/images/p3.png"

const products = [
    {
        name:"Product 1",
        price:"300",
        photos:[{path:p1}]
    },
    {
        name:"Product 2",
        price:"300",
        photos:[{path:p2}]
    },
    {
        name:"Product 3",
        price:"300",
        photos:[{path:p3}]
    }    
]

const ShowcaseLeft = () => {
    return (
        <div className='md:w-3/5 grid mt-6 gap-2 grid-cols-2 md:grid-cols-3'>
            {
                products.map((item,i)=><MainCard key={item.name} {...{item}} />)
            }
        </div>
    );
}

export default ShowcaseLeft;
