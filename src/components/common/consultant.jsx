import React from 'react'

export const Consultant = ({icon, title, number}) => {
    return (
        <div className='flex justify-center'>
            <div className='bg-white w-full border-[5px] border-[rgb(230,238,255)] rounded-[5px] max-w-[370px] flex flex-col h-[225px] justify-between items-center px-2 py-[40px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.25)'>
                <div className=''>
                    <img src={icon}></img>
                </div>
                <div className='font-bold text-[24px] text-[#212121] text-center'>
                    <span>{title}</span>
                </div>
                <div className='text-[18px] text-[#2D2D2D]'>
                    <span>{number}</span>
                </div>
            </div>
        </div>
    )
}

export default Consultant