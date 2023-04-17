import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import hamburger from '../../assets/hamburger.svg'

export const Menubar = () => {
    const navLinks = [
        {
            name: "Home",
            to: "#",
        },
        {
            name: "About Us",
            to: "#",
        },
        {
            name: "What We Are",
            to: "#",
        },
        {
            name: "How Its Works",
            to: "#",
        },
        {
            name: "Blogs",
            to: "#",
        },
        {
            name: "Contact",
            to: "#",
        },
    ]

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className='xl:px-[100px] px-5 md:flex hidden items-center py-[36px] gap-x-10'>
                {navLinks.map((item, key) => (
                    <Link to={item.to} key={key} className="text-lg font-medium text-[#020202] leading-7">{item.name}</Link>
                ))}
            </div>
            <div className='md:hidden flex bg-[#2273BB] items-center h-[50px] gap-x-[10px] w-full justify-between text-[16px] text-white xl:px-[100px] px-5'>
                <Link to="#">Find Consultant</Link>
                <Link to="#">Browse Student Profiles</Link>
                <button><img src={hamburger} alt="hamburger icon"></img></button>
            </div>
        </>
    )
}

export default Menubar