import React from 'react'

export const Summery = ({problem, answer}) => (
    <div className='flex justify-center'>
        <div className='2xl:max-w-[280px] xl:max-w-[250px] lg:max-w-[220px] md:max-w-[250px] max-w-[180px] p-[5px] md:border-none border-2 border-[#E6EEFF] md:shadow-none shadow-[1px_1px_1px_1px_rgba(0,0,0,0.25)] rounded-[5px] flex flex-col justify-center'>
            <div className='flex justify-center'><span className='2xl:text-[24px] xl:text-[20px] lg:text-[17px] text-[15px] mb-[20px] font-medium'>{problem}</span></div>
            <div className='2xl:pt-[30px] xl:pt-[20px] text-justify'>
                <span className='2xl:text-[18px] xl:text-[16px] lg:text-[14px] font-medium'>{answer}</span>
            </div>
        </div>
    </div>
)

export default Summery