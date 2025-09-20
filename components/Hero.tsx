import Image from 'next/image'
import React from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs'

const Hero = () => {
    return (
        <section className='p-5 flex flex-row'>
            <div className='w-1/2 p-5 flex flex-col mt-20'>
                <h1 className='text-7xl text-blue-950 font-bold'>Medence Legal</h1>
                <span className='text-4xl text-gray-500 my-8 text-left'>Your Personal Lawyer. On Your Side, Always.</span>
                <div className='flex flex-row gap-6 font-semibold'>
                    <button className='mt-4 p-5 bg-yellow-200/60 text-blue-900 rounded-full hover:bg-yellow-300/60 w-fit cursor-pointer'>
                        Check Plans
                    </button>
                    <button className='mt-4 p-5 bg-white text-blue-900 rounded-full hover:bg-gray-200 w-fit cursor-pointer flex flex-row gap-2 items-center'>
                        <span>Book a Call</span>
                        <BsArrowUpRightCircle size={24} />
                    </button>
                </div>
            </div>
            <div className='w-1/2'>
                <div className="absolute top-[100px] right-0 w-1/3 h-[80svh]  bg-gradient-to-br from-yellow-100 to-yellow-100 opacity-70 -z-10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)" }}></div>
                <Image
                    src='/lawyer.webp'
                    alt='Hero Image'
                    width={515}
                    height={420}
                    className='rounded-lg'
                />
            </div>
        </section>
    )
}

export default Hero