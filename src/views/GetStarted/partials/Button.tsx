import React from 'react'

type Props = {
    onClick?: any;
    text?: string;
    css?: string;
    type?: any;
}

const Button = ({ onClick, text, css, type }: Props) => {
    return (
        <button
            type={type ? type : null}
            className={`flex gap-4 items-center group relative contact-border duration-300 ease-in-out ${css}`}
            onClick={onClick}
        >
            <span className="text-[13px] group-hover:pl-2 duration-300 font-bold font-primary text-redblack leading-4">
                {text}
            </span>
        </button>
    )
}

export default Button