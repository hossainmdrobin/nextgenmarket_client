import Image from 'next/image';
import React from 'react';

const IdeasCard = ({photo, text}) => {
    return (
        <div>
            <Image src={photo.src} width={444} height={433} alt="Photo" />
        </div>
    );
}

export default IdeasCard;
