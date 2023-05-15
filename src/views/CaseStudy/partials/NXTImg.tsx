import Image from 'next/image'
import React from 'react'

type Props = {
    src: string;
    alt: string;
}

const NXTImg = ({ src, alt }: Props) => {
    return (
        <>
            <Image
                src={src}
                layout='fill'
                placeholder='blur'
                blurDataURL={src}
                className="block border-0 max-w-full h-full w-full object-cover object-[50%,50%] group-hover:scale-125 duration-[400ms] ease-in-out"
                alt={alt}
                priority
            />
        </>
    )
}

export default NXTImg