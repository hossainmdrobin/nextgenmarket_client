import React from 'react';
import TextWithIcon from './TextWithIcon';
import i1 from "./../../../assets/icons/i1.png"
import i2 from "./../../../assets/icons/i2.png"
import i3 from "./../../../assets/icons/i3.png"

const obj = [
    {
        header:"DISHES & BOWLS",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        icon:i1,
    },
    {
        header:"TABLEWARE",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        icon:i2,
    },
    {
        header:"VASES & DECOR",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        icon:i3,
    },
]

const OurProductRight = () => {
    return (
        <div className='w-full md:w-1/2'>
            <div className='md:ml-32'>
                <h4>THE BEST OR CERMAICS </h4>
                <h1>OUR PRODUCTS</h1>                
                {
                    obj.map((item,i)=> <TextWithIcon key={i} {...{item}}/>)
                }
            </div>
        </div>
    );
}

export default OurProductRight;
