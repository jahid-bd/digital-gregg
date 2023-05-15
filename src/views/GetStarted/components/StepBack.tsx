import BackArrow from '@components/Icons/BackArrow'
import React, { useState } from 'react'

type Props = {
    setStep: any;
    backStepNum: number;
}

const StepBack = ({setStep, backStepNum}: Props) => {

    const [color, setColor] = useState('#C6C6C6')

    return (
        <div className='py-5'>
            <button
                onMouseOver={() => setColor('#C10206')}
                onMouseLeave={() => setColor('#C6C6C6')}
                onClick={() => setStep(backStepNum)}
                className='flex items-center gap-4 group'
            >
                <BackArrow hoverColor={color} />
                <span className='text-[13px] font-semibold text-[#C6C6C6] group-hover:text-primary'>Go Back</span>
            </button>
        </div>
    )
}

export default StepBack