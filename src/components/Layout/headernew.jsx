import React from 'react'
import { Link } from 'react-router-dom'
import chat from '../../assets/report/Chat.png'
import call from '../../assets/report/Call.png'
import video from '../../assets/report/Video.png'
import pastConsultant from '../../assets/report/pastConsultant.png'
import totalEarn from '../../assets/report/totalEarn.png'
import myWork from '../../assets/report/myWork.png'
import notification from '../../assets/report/Notification.png'

export const HeaderNew = () => {
    return (
        <div className='grid grid-cols-2 justify-between xl:px-[100px] px-5 border-b'>
            <div className='flex justify-start gap-[50px] items-center w-full h-full'>
                <div className='py-[15px]'>
                    <h1 className='font-medium 2xl:text-[48px] xl:text-[40px] lg:text-[32px] md:text-[24px] text-[16px]'>Coherten</h1>
                </div>
                <div>
                    <Link to="#" className='text-[#212121] 2xl:text-[20px] xl:text-[16px]'>Browse student profiles</Link>
                </div>
                <div>
                    <select
                        id="report"
                        name="report"
                        className='2xl:text-[20px] xl:text-[16px] font-medium text-[#2D2D2D]'
                        defaultValue="Report"
                    >
                        <option><img src={pastConsultant} alt="chat" />Past Consultant</option>
                        <option><img src={myWork} alt="call" />My Work</option>
                        <option><img src={totalEarn} alt="video" />Total Earning</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-end 2xl:gap-[100px] xl:gap-[80px] lg:gap-[60px] md:gap-[40px] gap-[20px] items-center'>
                <div>
                    <input type="search" placeholder='Search Here' className='py-[10px] pl-[20px] font-medium 2xl:text-[20px] text-[16px] text-[#2d2d2d] opacity-50 border border-[#E5EEFF] bg-[#F4F7FF] rounded-[5px] shadow-lg'/>
                </div>
                <div>
                    <button><img src={notification} alt="alarm" /></button>
                </div>
                <div>
                    <select
                        id="report"
                        name="report"
                        className='2xl:text-[20px] xl:text-[16px] font-medium text-[#2D2D2D]'
                        defaultValue="Report"
                    >
                        <option><img src={pastConsultant} alt="chat" />Setting</option>
                        <option><img src={myWork} alt="call" />Logout</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default HeaderNew