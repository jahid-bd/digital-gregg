import React from 'react';

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="lg:text-[36px] md:text-[28px] text-[24px] font-[700] text-black pb-6">
      {children}
    </h2>
  );
};

export default SectionHeader;
