import React from 'react'

type Props = {}

const ModalText = (props: Props) => {
    return (
      <div className="text-[14px] leading-[19px]">
        <h4 className="font-bold mb-4">
          PRIVACY POLICY FOR THE PROCESSING OF PERSONAL DATA
        </h4>

        <p>
          This information (hereinafter, “Privacy Policy”) relates to the
          processing of your personal data carried out by DigitalGregg S.r.l.
          with registered office in 750 E Main St Stamford, CT 06902, USA, email
          gregg@digitalgregg.com (hereinafter, the “Data Controller” or
          “DigitalGregg”), also in accordance with EU Regulation 2016/679
          (hereinafter, “GDPR”). The Data Controller may process your personal
          data, as a Data Subject and/or contractor, in accordance with the
          applicable data protection legislation.
        </p>

        <h4 className="font-bold mt-4">
          1. Identity and contact details of the Data Controller [and the DPO]
        </h4>
        <p>
          {" "}
          The Data Controller is DigitalGregg S.r.l. As the Data Controller is
          established in the Italian territory, no representative has been
          appointed. The Data Controller has appointed a Data Protection Officer
          (“DPO”), pursuant to Article 37 GDPR. The DPO can be contacted at the
          following address: gregg@digitalgregg.com.
        </p>

        <h4 className="font-bold mt-4">
          2. Purpose of processing and legal basis of processing
        </h4>
        <p>
          {" "}
          {`Your personal data will be processed for the following purposes:
    a) for contractual purposes, to allow you to purchase services and products through Data Controller’s E-commerce. The legal basis for processing is the need to process your personal data for the performance of the contract. The communication of your personal data is an obligation. If you do not communicate your personal data, no contract can be concluded;
    b) to send you direct marketing communications, newsletters, advertising material, by means of traditional contact systems and automated computer systems, including commercial or promotional communications by email or SMS, or for market research and analysis. The legal basis for the processing is consent, expressed in accordance with the Privacy Policy;
    c) for purposes related to relevant legal obligations. The legal basis for the processing is the legal obligation of the Data Controller to process personal data in accordance with applicable law.`}
        </p>
      </div>
    );
}

export default ModalText