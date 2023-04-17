import React, { useEffect, useState } from 'react'
import Consultant from './consultant'

export const Consultants = ({consultants}) => {
    const [conslts , setConslts] = useState([])

    useEffect(() => {
        if(consultants) {
            setConslts(consultants)
        }
    }, [consultants])

    return (
        <div>
            <div className='flex md:text-[48px] text-[30px] md:justify-center font-bold md:pl-0 pl-5 pt-[60px]'>
                <h1>Find top consultants</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[15px] md:pt-[70px] pt-[20px] 2xl:px-[100px] xl:px-[65px] md:px-[20px] px-[20px]'>
                {
                    conslts.map((item, key) => (
                        <Consultant icon={item?.icon} title={item?.title} number={item?.number} key = {key} />
                    ))
                }
            </div>
        </div>
    )
}

export default Consultants