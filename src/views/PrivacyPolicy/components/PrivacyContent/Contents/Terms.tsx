import React from 'react';

const Terms = () => {
    return (
        <div id='terms-and-conditions-of-use' className="terms pt-[6rem]">
            <h4 className='sticky text-[#4B4B4B] font-bold text-[21px] leading-[32px] top-0 mb-[1.3rem] py-[1.3rem] bg-[#F7F8F7] pl-[2rem]'>Terms and Conditions of Use</h4>
            <div className='pl-[2rem]'>
                <p  className='text-[13px] leading-7 font-medium text-[#4B4B4B]'>{`By accessing this Website, you agree to be bound by these Website Terms and Conditions of Use (“T&C”), all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this Website. The materials contained in this Website are protected by applicable copyright and trade mark law.`}</p>
                <p className='text-[14px] leading-7 font-medium text-[#4B4B4B]'>{`
                    You may use the Website only for lawful purposes. It is forbidden to use the Website: in any way which may lead to a violation of applicable law; in any manner that is unlawful or dishonest, or in a manner that seeks to achieve an unlawful or unfair purpose; to send, knowingly receive, upload, use or reuse content that does not comply with the T&C; to forward or provoke the shipment of any unsolicited or unauthorized advertising or promotional materials, as well as any similar forms belonging to the collective category of “spam”; to knowingly transfer any data, send or upload any material containing viruses, trojans, spyware, adware or other malicious software or similar computer codes programmed to adversely affect or threaten the functioning of any software, network or computer equipment. It is forbidden to attempt to gain unauthorized access to the server on which the Website is stored, computer or database related to the Website, as well as any unauthorised access aimed at or resulting in damage or disruption of any part of the Website, equipment or network where the Website is stored, any software used to operate the Website or any equipment, networks or software owned by or used by third parties.`}</p>
            </div>
        </div>
    );
};

export default Terms;