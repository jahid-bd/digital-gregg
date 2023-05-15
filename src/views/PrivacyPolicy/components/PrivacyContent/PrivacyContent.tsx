import dynamic from 'next/dynamic';
import React from 'react';
const BreachGoverningLaw = dynamic(() => import('./Contents/BreachGoverningLaw'));
const Cookie = dynamic(() => import('./Contents/Cookie'));
const Disclaimer = dynamic(() => import('./Contents/Disclaimer'));
const Limitations = dynamic(() => import('./Contents/Limitations'));
const Links = dynamic(() => import('./Contents/Links'));
const Modification = dynamic(() => import('./Contents/Modification'));
const Privacy = dynamic(() => import('./Contents/Privacy'));
const RevisionErrata = dynamic(() => import('./Contents/RevisionErrata'));
const Terms = dynamic(() => import('./Contents/Terms'));
const UseLicense = dynamic(() => import('./Contents/UseLicense'));
const WebsiteAdministrator = dynamic(() => import('./Contents/WebsiteAdministrator'));


const PrivacyContent = () => {
    return (
        <div className='bg-[#F8F4F4] pt-[8rem] pb-[5rem] pl-0 lg:pl-[2.4rem] pr-[2rem] lg:pr-[80px]'>
            <div className='pl-[2rem]'>
                <h2 className='font-bold text-[32px] leading-[48px] max-w-full sm:w-[85%] md:w-[75%] lg:hidden'>Website Terms and Conditions of Use</h2>
                <h2 className='font-bold text-[36px] leading-[48px] hidden lg:block'>Website Terms and <br /> Conditions of Use</h2>
            </div>
            <WebsiteAdministrator/>
            <Terms/>
            <UseLicense/>
            <Disclaimer/>
            <Limitations/>
            <RevisionErrata/>
            <Links/>
            <Modification/>
            <BreachGoverningLaw/>
            <Privacy/>
            <Cookie/>
        </div>
    );
};

export default PrivacyContent;