import React from 'react'
import Image from 'next/image';
import { BsArrowUpRightCircle } from "react-icons/bs";

const Navbar = () => {
    return (
        <section className='flex justify-between items-center px-4 mx-8'>
            <div className='flex gap-8 items-center'>
                <div>
                    <Image src="/logo.webp" alt="Logo" width={100} height={100} />
                </div>
                <div className='flex gap-6'>
                    <div className='text-blue-900 p-2 mb-2 hover:border-b-2 cursor-pointer'>Home</div>
                    <div className='text-blue-900 p-2 mb-2 hover:border-b-2 cursor-pointer'>FAQs</div>
                </div>
            </div>
            <div className='text-blue-900 text-lg cursor-pointer hover:text-blue-700'>
                <div className='flex items-center'>
                    <div>Book a call</div>
                    <BsArrowUpRightCircle className='ml-2' size={24} />
                </div>
            </div>
        </section>
    )
}

export default Navbar