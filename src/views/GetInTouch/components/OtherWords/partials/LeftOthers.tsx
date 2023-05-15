import React from 'react'
import SlickTextSlider from './SlickTextSlider'

type Props = {}

const LeftOthers = (props: Props) => {
    return (
        <div className="space-y-8 mr-5 lg:mr-20">

            <div className="flex items-center gap-5">
                <div className="w-6 h-0.5 bg-white"></div>
                <h4 className="text-white font-semibold text-[14px] tracking-widest uppercase">
                    In other words
                </h4>
            </div>

            <div className='text-white'>
                <SlickTextSlider />
            </div>
        </div>
    )
}

export default LeftOthers