import Link from 'next/link';
import React from 'react';

const LogoTabs = ({name, children, link}) => {
    return (
        <Link className='flex items-center justify-center mx-4' href={link}>
            <span className='mr-2'>{children}</span>
            <h4>{name}</h4>
        </Link>
    );
}

export default LogoTabs;
