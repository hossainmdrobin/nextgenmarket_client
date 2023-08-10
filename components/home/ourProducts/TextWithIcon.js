import Image from 'next/image';
import React from 'react';

const TextWithIcon = ({item}) => {
    return (
        <div className='my-16'>
            <div>
                <Image className='h-16 w-auto' src={item.icon} alt={item.header}/>
            </div>
            <div>
                <h4>{item.header}</h4>
            </div>
            <div>
                <p>{item.text}</p>
            </div>
        </div>
    );
}

export default TextWithIcon;
