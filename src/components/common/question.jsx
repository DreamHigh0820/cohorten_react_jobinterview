import React from 'react'
import Summery from './summery.jsx'

export const Question = ({title, questions}) => {
    return (
        <div className='lg:px-[50px] px-[20px] pt-[60px]'>
            <div>
                <h1 className='lg:text-[48px] text-[36px] font-medium'>{title}</h1>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 pt-[50px] gap-4 justify-center'>
                {
                    questions?.map((item, key) => (
                        <Summery problem={item?.problem} answer={item?.answer} key = {key} />
                    ))
                }
            </div>
        </div>
    )
}

export default Question