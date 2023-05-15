import Link from 'next/link'
import React from 'react'

type Props = {}

const AllCaseStudies = (props: Props) => {
    return (
        <Link href={'/case-study'} passHref>
            <a
                className="flex items-center justify-center gap-4 group hover:gap-5 duration-300 font-medium text-xs bg-primary md:bg-transparent pr-6 md:pr-0 pl-6 py-5 md:py-0"
                href="#"
                aria-label='case study page'
            >
                <p className="font-primary text-white text-[14px] leading-4">
                    All case studies
                </p>

                <div className="grid grid-cols-2 gap-[2px] group-hover:rotate-90 duration-300">
                    <div className="aspect-square bg-white w-1.5"></div>
                    <div className="aspect-square bg-white w-1.5"></div>
                    <div className="aspect-square bg-white w-1.5"></div>
                    <div className="aspect-square bg-white w-1.5"></div>
                </div>
            </a>
        </Link>
    )
}

export default AllCaseStudies