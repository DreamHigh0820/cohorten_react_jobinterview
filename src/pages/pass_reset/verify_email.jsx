import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import login_dashboard from '../../assets/login/pass_reset_dashboard.png'

export const VerifyEmail = () => {

    return (
        <>
            <section className="">
                <div className="h-full">
                    <div className="flex h-full justify-center">
                        <div className="w-1/2">
                            <img
                                src={login_dashboard}
                                className="w-full"
                                alt="pass_reset_dashboard img" />
                        </div>

                        <div className="w-1/2 px-[107px]">
                            <form>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='text-[#2273BB] font-semibold text-[48px] pt-[226px]'>
                                        <span>Verify Your Email</span>
                                    </div>
                                </div>
                                
                                <div
                                    className="py-[30px] flex items-center before:mt-0.5 before:flex-1 before:border-t-[3px] before:border-[#4267B2] after:mt-0.5 after:flex-1 after:border-t-[3px] after:border-[#4267B2]">
                                </div>

                                <div className='flex items-center justify-center pb-[30px]'>
                                    <span>Please enter 4 digit code sent to given Gmail id</span>
                                </div>

                                {/* verification input box */}
                                <div class="container mx-auto">
                                    <div class="max-w-sm mx-auto md:max-w-lg">
                                        <div class="w-full">
                                            <div class="bg-white py-3 rounded text-center">
                                                <div id="otp" class="flex flex-row justify-center text-center px-2">
                                                    <input class="m-5 border border-[#4267B2] h-14 w-20 text-center form-control rounded-[10px]" type="text" id="first" maxlength="1" /> 
                                                    <input class="m-5 border border-[#4267B2] h-14 w-20 text-center form-control rounded-[10px]" type="text" id="second" maxlength="1" /> 
                                                    <input class="m-5 border border-[#4267B2] h-14 w-20 text-center form-control rounded-[10px]" type="text" id="third" maxlength="1" /> 
                                                    <input class="m-5 border border-[#4267B2] h-14 w-20 text-center form-control rounded-[10px]" type="text" id="fourth" maxlength="1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-center items-center pt-[10px]'>
                                    <button
                                        type="submit"
                                        className="rounded-[10px] px-[100px] py-[24px] text-[24px] font-semibold leading-normal text-white"
                                        style={{background: "linear-gradient(265.87deg, #3D61BC 1.6%, #2273BB 99.12%)"}}
                                        >
                                        Verify
                                    </button>
                                </div>

                                <div className='flex items-center justify-center'>
                                    <div className='pt-[50px] flex justify-between min-w-[330px]'>
                                        <Link to="/pass_reset_dashboard" className='text-[36px] hover:bg-[#2273BB] hover:text-white border-none hover:rounded-full'><BsArrowLeftCircle /></Link>
                                        <Link to="/verifyEmail" className='text-[36px] hover:bg-[#2273BB] hover:text-white border-none hover:rounded-full'><BsArrowRightCircle /></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  }

export default VerifyEmail