import React from 'react'
import {useState} from 'react'

import Layout from '../../components/Layout/index'
import Question from '../../components/common/question'
import Consultants from '../../components/common/consultants'
import Blog from '../../components/common/blog'
import Modal from "../modal";

import bangor from '../../assets/mark/bangor.png'
import liverpool from '../../assets/mark/liverpool.png'
import brunel from '../../assets/mark/brunel.png'
import edge_hill from '../../assets/mark/edge_hill.png'
import oxford from '../../assets/mark/oxford.png'
import programming_environment from '../../assets/consultants/programming_environment.png';
import design_art from '../../assets/consultants/design_art.png';
import business_finance from '../../assets/consultants/business_finance.png';
import engineering_architecture from '../../assets/consultants/engineering_architecture.png';
import sales_marketing from '../../assets/consultants/sales_marketing.png';
import logical from '../../assets/consultants/logical.png';
import blog1 from '../../assets/blogs/blog1.png';
import blog2 from '../../assets/blogs/blog2.png';
import blog3 from '../../assets/blogs/blog3.png';
import blog4 from '../../assets/blogs/blog4.png';

export default () => {
    const question1 = [
        {
            problem: "Post a Query",
            answer: "It’s free and easy to post a Query. You can get a consultant list from to choose for."
        },
        {
            problem: "Choose Consultant",
            answer: "We have got a list of all the Consultants based on rating. You can choose among them."
        },
        {
            problem: "Pay Safely",
            answer: "Choose from multiple payment methods with SafePay payment protection."
        },
        {
            problem: "We are here to help you",
            answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. "
        },   
    ]

    const question2 = [
        {
            problem: "Consultant Profile",
            answer: "Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. "
        },
        {
            problem: "Fast Consultant",
            answer: "Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. "
        },
        {
            problem: "Quality Work",
            answer: "Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. "
        },
        {
            problem: "Track Progress",
            answer: "Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat.  "
        },   
    ]

    const consultants = [
        {
            icon: programming_environment,
            title: "Programming & Development",
            number: "1442 Consultants"
        },
        {
            icon: design_art,
            title: "Design & Art",
            number: "1442 Consultants"
        },
        {
            icon: business_finance,
            title: "Business Finance",
            number: "1442 Consultants"
        },
        {
            icon: engineering_architecture,
            title: "Engineering & Architecture",
            number: "1442 Consultants"
        },
        {
            icon: sales_marketing,
            title: "Sales & Marketing",
            number: "1442 Consultants"
        },
        {
            icon: logical,
            title: "Legal",
            number: "1442 Consultants"
        }
    ]

    const blogs = [
        {
            img: blog1,
            date: "March 15 , 2023",
            string: "Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. "
        },
        {
            img: blog2,
            date: "March 15 , 2023",
            string: "Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. "
        },
        {
            img: blog3,
            date: "March 15 , 2023",
            string: "Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. "
        },
        {
            img: blog4,
            date: "March 15 , 2023",
            string: "Lorem ipsum dolor sit amet,consectetuer adipiscing elit, sed diam nonummy nibh  aliquam erat volutpat. "
        }
    ]

    return(
        <>
            <Layout>
                {/* logo */}
                <div className='relative'>
                    <div className='w-full absolute lg:h-[564px] sm:h-[190px] h-[180px]' style={{background: "linear-gradient(96.79deg, #000000 0.31%, rgba(0, 0, 0, 0.48) 87.08%)"}}>
                        <div className='font-medium lg:max-w-[450px] max-w-[240px] lg:pl-[60px] pl-[20px] lg:pt-[60px] pt-[20px]'>
                            <p className='text-white lg:text-[48px] text-[24px]'>Consult with Student & Alumni before your <br /><span className='lg:text-[56px] text-[24]'>Next Move.</span></p>
                        </div>
                        <div className='flex pl-[60px] pt-[20px] pb-[74px] gap-x-[50px]'>
                            <button className='text-[20px] lg:flex hidden border-2 border-white rounded-[5px] text-white bg-[#3D61BC] px-[64px] py-[38px] font-bold'>Find a Friendly Student</button>
                            <button className='text-[20px] lg:flex hidden border-2 border-white rounded-[5px] text-white hover:bg-[#3D61BC] px-[64px] py-[38px] font-bold' style={{background: "linear-gradient(179deg, rgba(0, 0, 0, 0.5) 0.91%, rgba(255, 255, 255, 0.5) 99.19%)"}}>Earn Money Consulting</button>
                        </div>
                    </div>
                    <div className='bg-landingBg1 sm:h-[190px] lg:h-[564px] h-[180px] bg-center' style={{backgroundSize: "100% 100%"}}>
                    </div>
                </div>

                <div className=' bg-white items-center grid grid-cols-5 gap-4 lg:px-[50px] px-[20px] lg:py-[10px] py-[5px] border-b'>
                    <div className='flex justify-center'>
                        <img src={bangor} alt="bangor"></img>
                    </div>
                    <div className='flex justify-center'>
                        <img src={liverpool} alt="liverpool"></img>
                    </div>
                    
                    <div className='flex justify-center'>
                        <img src={brunel} alt="brunel"></img>
                    </div>
                    <div className='flex justify-center'>
                    <img src={edge_hill} alt="edge_hill"></img>
                    </div>
                    <div className='flex justify-center'>
                    <img src={oxford} alt="oxford"></img>
                    </div>
                </div>
                <div className='bg-[#F4F7FF]'>
                    <Question title="Need something done?" questions={question1} />
                    <Question title="What great about it ?" questions={question2} />            
                    <Consultants consultants={consultants} />
                </div>
                <div className='md:pt-[50px] pt-[25px] bg-[#F4F7FF]'>
                    <div className='flex md:text-[48px] text-[30px] md:justify-center pl-[20px] md:pl-0 pl-20px font-bold md:pt-[30px] pt-[25px]'>
                        <h1>Insights Blogs</h1>
                    </div>
                    <div>
                        <div className='grid justify-center lg:grid-cols-4 grid-cols-2 md:pt-[30px] pt-[3px] gap-[20px] md:px-0 px-5'>
                            {
                                blogs.map((item, key) => (
                                    <Blog img={item?.img} date={item?.date} string={item?.string} key = {key} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex justify-center py-[50px]'>
                        <button className='bg-[#2273BB] font-bold text-white text-[24px] px-[36px] py-[24px] rounded-[5px]' style={{background: "linear-gradient(265.87deg, #3D61BC 1.6%, #2273BB 99.12%)"}}>View Our Blogs</button>
                    </div>
                </div>
            </Layout>
        </>
        
    );
}