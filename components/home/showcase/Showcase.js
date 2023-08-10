import React from 'react';
import CaseNav from "./CaseNav";
import ShowcaseLeft from "./ShowcaseLeft";
import ShowcaseRight from "./ShowcaseRight"


const Showcase = () => {
    return (
        <div className='mx-12 min-h-screen'>
            <CaseNav />
            <div className='w-full md:flex'>
                <ShowcaseLeft />
                <ShowcaseRight />
            </div>
        </div>
    );
}

export default Showcase;
