import React from 'react'

export const Blog = ({img, date, string}) => {
    return(
        <div className='flex justify-center'>
            <div className='xl:max-w-[300px] lg:max-w-[250px] md:max-w-[300px] sm:max-w-[250px] max-w-[184px] border-[5px] border-[#cfd7e6] rounded-[5px]'>
                <div>
                    <img src={img} />
                </div>
                <div className='xl:px-5 lg:px-3 md:px-5 sm:px-3 px-2 xl:py-5 lg:py-2 md:py-5 py-1'>
                    <div>
                        <span className='xl:text-[16px] lg:text-[14px] md:text-[16px] sm:text-[14px] text-[12px]'>{date}</span>
                    </div>
                    <div className='text-justify xl:pt-5 lg:pt-2 md:pt-5 sm:pt-2 pt-[2px]'>
                        <span className='xl:text-[18px] lg:text-[16px] md:text-[18px] sm:text-[16px] text-[10px]'>{string}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog