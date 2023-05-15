import React from 'react'

type Props = {
    type?: string;
    id?: string;
    isRequired?: boolean;
    placeholder?: string;
    onChange?: any;
    label?: string;
}

const Input = ({ type, id, isRequired, placeholder, onChange, label }: Props) => {
    return (
        <div className="relative z-0 w-full mb-5">
            <input
                type={type ? type : "text"}
                name={id ? id : ''}
                placeholder={placeholder ? placeholder : ''}
                required={isRequired}
                onChange={onChange}
                className="py-1 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-gray-200 caret-white text-white"
            />
            <label htmlFor={id ? id : ''} className="absolute duration-300 top-1 -z-1 origin-0 text-gray-400 focus:text-gray-400">
                {label}
                <span className='text-primary'>*</span>
            </label>
        </div>
    )
}

export default Input