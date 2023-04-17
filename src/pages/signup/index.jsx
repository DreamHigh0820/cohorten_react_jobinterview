import React from 'react'
import { Link } from 'react-router-dom'
import login_dashboard from '../../assets/login/login_dashboard.png'
import facebook from '../../assets/facebook.svg';
import google from '../../assets/google.svg';
import linkedIn from '../../assets/linkedIn.svg';

const SignUp = () => {
    return (
        <section className="">
            <div className="h-full">
                <div className="flex h-full justify-center">
                    <div className="w-1/2">
                        <img
                            src={login_dashboard}
                            className="w-full"
                            alt="Phone image" />
                    </div>

                    <div className="w-1/2 px-[107px]">
                        <form>
                            <div className='font-bold text-[36px] pt-[80px]'>
                                 <span>Get Started</span>
                            </div>
                            <div className='font-bold text-[18px] pt-[10px] pb-[20px]'>
                                 <span>Create your account Now</span>
                            </div>
                            <Link
                                className="mb-3 flex items-center justify-center rounded-[10px] py-[10px] text-center text-[36px] font-medium border border-[#4267B2] gap-[25px]"
                                to="#!"
                                role="button"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img src={google} alt="google icon" />
                                Log In With Google
                            </Link>
                            <Link
                                className="mb-3 flex items-center justify-center rounded-[10px] py-[10px] text-center text-[36px] font-medium border border-[#4267B2] gap-[25px]"
                                to="#!"
                                role="button"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img src={facebook} alt="google icon" />
                                Log In with Facebook
                            </Link>
                            <Link
                                className="flex items-center justify-center rounded-[10px] py-[10px] text-center text-[36px] font-medium border border-[#4267B2] gap-[25px]"
                                to="#!"
                                role="button"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <img src={linkedIn} alt="google icon" />
                                Log In with LinkedIn
                            </Link>

                            <div
                                className="py-[20px] flex items-center before:mt-0.5 before:flex-1 before:border-t-[0.5px] before:border-[#4267B2] after:mt-0.5 after:flex-1 after:border-t-[0.5px] after:border-[#4267B2]">
                                <p
                                    className="mx-4 mb-0 text-center font-medium">
                                    OR
                                </p>
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className="text-[20px] font-semibold peer block min-h-[auto] w-full rounded-[10px] border border-[#4267B2] bg-transparent px-3 py-[0.22rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 opacity-35 motion-reduce:transition-none"
                                    id="exampleFormControlInput3"
                                    placeholder="Enter Full Name" />
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    className="text-[20px] font-semibold peer block min-h-[auto] w-full rounded-[10px] border border-[#4267B2] bg-transparent px-3 py-[0.22rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 opacity-35 motion-reduce:transition-none"
                                    id="exampleFormControlInput3"
                                    placeholder="Enter User Name" />
                            </div>

                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <input
                                    type="gmail"
                                    className="text-[20px] font-semibold peer block min-h-[auto] w-full rounded-[10px] border border-[#4267B2] bg-transparent px-3 py-[0.22rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 opacity-35 motion-reduce:transition-none"
                                    id="exampleFormControlInput3"
                                    placeholder="Enter Email Id" />
                            </div>

                            <div className="relative pb-[5px]" data-te-input-wrapper-init>
                                <input
                                    type="password"
                                    className="text-[20px] font-semibold peer block min-h-[auto] w-full rounded-[10px] border border-[#4267B2] bg-transparent px-3 py-[0.22rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 opacity-35 motion-reduce:transition-none"
                                    id="exampleFormControlInput33"
                                    placeholder="Enter Your Password" />
                            </div>

                            <div className="flex items-center justify-center pt-[5px]">

                                <div className="flex items-center min-h-[1.5rem]">                               
                                    <input
                                        className="mt-[3px] relative float-left h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        value=""
                                        id="exampleCheck3"
                                        checked />
                                    <label
                                        className="pl-[5px] inline-block font-medium text-[20px]"
                                        for="exampleCheck3">
                                        I agree to the Consult service 
                                        <Link
                                            to="/signup"
                                            className="text-[20px] text-[#3D61BC] font-medium px-[5px]"
                                            >User Agreement
                                        </Link>
                                        and
                                        <Link
                                            to="/signup"
                                            className="text-[20px] text-[#3D61BC] font-medium pl-[5px]"
                                            >Privacy Policy.
                                        </Link>
                                        
                                    </label>
                                </div>
                            </div>

                            <div className='flex justify-center items-center pt-[10px]'>
                                <button
                                    type="submit"
                                    className="rounded-[10px] px-[90px] py-[20px] text-[24px] font-semibold leading-normal text-white"
                                    style={{background: "linear-gradient(265.87deg, #3D61BC 1.6%, #2273BB 99.12%)"}}
                                    >
                                    Sign Up
                                </button>
                            </div>

                            <div
                                className="pt-[35px] flex items-center before:mt-0.5 before:flex-1 before:border-t-[0.5px] before:border-[#4267B2] after:mt-0.5 after:flex-1 after:border-t-[0.5px] after:border-[#4267B2]">
                            </div>
                            <div className="flex items-center justify-center pt-[35px]">
                                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                    <label
                                        className="inline-block font-medium text-[20px]"
                                        for="exampleCheck3">Don’t have an Account ? 
                                        <Link
                                            to="/login"
                                            className="pl-[10px] text-[20px] text-[#3D61BC] font-medium"
                                            >Log in
                                        </Link>
                                    </label>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp