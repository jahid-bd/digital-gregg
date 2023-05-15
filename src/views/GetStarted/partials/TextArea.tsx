import React from 'react'

type Props = {
    onChange: any;
    value: any;
    error: boolean;
    placeholder:string
}
         
const TextArea = ({ value, onChange, error,placeholder}: Props) => {
    return (
        <div className="mb-5 mt-8">
            <textarea
                className={`form-control block w-full px-3  py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white ${error ? "!border-primary" : null} focus:border-primary resize-none`} 
                rows={7}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            ></textarea>
        </div>
    )
}

export default TextArea