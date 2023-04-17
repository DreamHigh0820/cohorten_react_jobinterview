import React from 'react'
import facebook from '../../assets/facebook.svg'
import skype from '../../assets/skype.svg'
import linkedIn from '../../assets/linkedIn.svg'
import twitter from '../../assets/twitter.svg'

export const Footer = () => {
    return (
        <footer className='text-white'>
            <div className='bg-[#363E51] flex justify-between py-[105px] pt-[50px]'>
                <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2 grid-cols-1 gap-1 2xl:pl-[190px] xl:pl-[125px] lg:pl-[50px] md:pl-[50px] sm:pl-[35px] pl-5">
                    <div className='lg:pr-[50px]'>
                        <h1 className='text-[24px]'>Navigate</h1>
                        <ul className='ul-padding-15'>
                            <li>Home</li>
                            <li>What We Are</li>
                            <li>find Consultant</li>
                        </ul>
                    </div>
                    <div className='lg:pr-[50px]'>
                        <h1 className='text-[24px]'>Company Info</h1>
                        <ul className='ul-padding-15'>
                            <li>Home</li>
                            <li>How it’s Works</li>
                            <li>Work Agreements</li>
                            <li>Safe Pay</li>
                        </ul>
                    </div>
                    <div className='lg:pr-[50px]'>
                        <h1 className='text-[24px]'>Resources</h1>
                        <ul className='ul-padding-15'>
                            <li>Help & FAQ</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='lg:pr-[50px]'>
                        <h1 className='text-[24px]'>Policies</h1>
                        <ul className='ul-padding-15'>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Copyright Policy</li>
                            <li>Fees and Charges</li>
                        </ul>
                    </div>
                </div>
                <div className='2xl:pr-[190px] xl:pr-[125px] lg:pr-[50px] md:pr-[50px] sm:pr-[35px] pr-5'>
                    <div>
                        <h1 className='text-[24px]'>Connect with Us</h1>
                    </div>
                    <div className='pt-[20px]'>
                        <ul className='logo-list flex w-full justify-between'>
                            <li>
                                <button>
                                        <img src={facebook} alt={"facebook icon"} />
                                </button>
                            </li>
                            <li>
                                <button>
                                        <img src={twitter} alt={"twitter icon"} />
                                </button>
                            </li>
                            <li>
                                <button>
                                        <img src={skype} alt={"skype icon"} />
                                </button>
                            </li>
                            <li>
                                <button>
                                        <img src={linkedIn} alt={"linkedIn icon"} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex items-center line h-[58px] bg-[#2B3147] px-[105px]'>
                <span>Copyright © 2023.</span>
            </div>
        </footer>
    )
}

export default Footer;