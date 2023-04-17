
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../pages/modal'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className='flex font-medium w-full justify-between text-[20px] xl:px-[100px] px-5 border-b'>
                <div className='flex items-center lg:gap-x-[55px] gap-x-[20px]'>
                    <h1 className='text-[48px]'>Cohorten</h1>
                    <Link to="#" className='md:flex hidden py-[38px] font-[#212121]'>Find Consultant</Link>
                    <Link to="#" className='md:flex hidden py-[38px] font-[#212121]'>Browse Student Profiles</Link>
                </div>
                <div className='flex items-center lg:gap-[55px] gap-x-[5px] text-[24px]'>
                    <Link to="/login" className='rounded-[5px] px-[10px] py-[8px] text-[#4267B2] hover:bg-[#2273BB] hover:text-white'>Log In</Link>
                    <button className='rounded-[5px] px-[10px] py-[8px] bg-[#2273BB] text-white lg:flex hidden'
                    onClick={() => setIsOpen(true)}
                    >Sign Up</button>
                </div>
            </header>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default Header;