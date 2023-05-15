import dynamic from 'next/dynamic';
import React from 'react';
const PrivacyContent = dynamic(() => import('./components/PrivacyContent'));
const PrivacySidebar = dynamic(() => import('./components/PrivacySidebar'));

const PrivacyPolicy = () => {
    return (
        <div className='pl-0 lg:pl-[80px] pt-[70px] pb-[100px]'>
            <div className="grid grid-cols-1 lg:grid-cols-[25%,75%]">
                <PrivacySidebar/>
                <PrivacyContent/>
            </div>
        </div>
    );
};

export default PrivacyPolicy;