import React from 'react'
import classNames from 'classnames';

type Props = {
    type?: any;
    text: string;
}

const Button = ({ type, text }: Props) => {
    return (
        <button
            type={type ? type : 'submit'}
            className="flex gap-4 items-center group hover:translate-x-2 duration-300 ease-in-out"
        >
            <span className="text-[.92857rem] font-bold font-primary text-white leading-4">
                {text}
            </span>
            <span
                className={classNames(
                    "inline-block w-10 h-0.5 bg-white translate-y-1 group-hover:w-14 duration-[400ms] ease-in-out",
                )}
            ></span>
        </button>
    )
}

export default Button

{/* <p>Send</p>
<div className="w-6 h-0.5 bg-white"></div> */}