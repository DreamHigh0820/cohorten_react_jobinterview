import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import pass_reset_dashboard from '../../assets/login/pass_reset_dashboard.png'

export const ResetDashboard = () => {
    return (
        <section className="">
            <div className="h-full">
                <div className="flex h-full justify-center">
                    <div className="w-1/2">
                        <img
                            src={pass_reset_dashboard}
                            className="w-full"
                            alt="pass_reset_dashboard img" />
                    </div>

                    <div className="w-1/2 px-[107px]">
                        <form>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-[#2273BB] font-semibold text-[48px] pt-[226px]'>
                                    <span>Forget Password</span>
                                </div>
                            </div>
                            
                            <div
                                className="py-[30px] flex items-center before:mt-0.5 before:flex-1 before:border-t-[3px] before:border-[#4267B2] after:mt-0.5 after:flex-1 after:border-t-[3px] after:border-[#4267B2]">
                            </div>

                            <div className='flex items-center justify-center pb-[30px]'>
                                <span>Please enter your Email Id to Receive a Verification Code.</span>
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="email"
                                    className="text-[20px] font-semibold peer block min-h-[auto] w-full rounded-[10px] border border-[#4267B2] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 opacity-35 motion-reduce:transition-none"
                                    id="exampleFormControlInput3"
                                    placeholder="Enter Your Email" />
 
                            </div>

                            <div className='flex justify-center items-center pt-[10px]'>
                                <button
                                    type="submit"
                                    className="rounded-[10px] px-[100px] py-[24px] text-[24px] font-semibold leading-normal text-white"
                                    style={{background: "linear-gradient(265.87deg, #3D61BC 1.6%, #2273BB 99.12%)"}}
                                    >
                                    Next
                                </button>
                            </div>

                            <div className='flex items-center justify-center'>
                                <div className='pt-[50px] flex justify-between min-w-[330px]'>
                                    <Link to="/login" className='text-[36px] hover:bg-[#2273BB] hover:text-white border-none hover:rounded-full'><BsArrowLeftCircle /></Link>
                                    <Link to="/verifyEmail" className='text-[36px] hover:bg-[#2273BB] hover:text-white border-none hover:rounded-full'><BsArrowRightCircle /></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
  }

export default ResetDashboard