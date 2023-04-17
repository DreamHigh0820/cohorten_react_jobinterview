import { useState } from 'react';
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Modal({isOpen, setIsOpen}) {

  const [isStudent, setIsStudent] = useState(false);
  const [isConsultant, setIsConsultant] = useState(false);

  console.log(isStudent, isConsultant)

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="items-center justify-center min-h-screen px-4 text-center sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
            <div className="absolute inset-0 bg-gray-500 opacity-80"></div>
            </div>

            {/* main modal */}
            {!isConsultant && !isStudent && 
              <div className="md:w-[750px] sm:w-[500px] w-[350px] h-full inline-block bg-white overflow-hidden transform transition-all align-middle border-[0.3px] shadow-[2px_2px_2px_2px_rgba(0, 0, 0, 0.25)]" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className='flex justify-end pt-[10px] pr-[40px]'>
                  <button onClick={closeModal} type="button" className='font-medium text-[24px]'>x</button>
                </div>

                <div className='flex justify-center pt-[100px] pb-[105px]'>
                    <h1 className='sm:text-[36px] text-[24px] text-[#030303] font-semibold'>Welcome, In <span className='sm:text-[48px] text-[32px] text-[#030303]'>Cohorten</span></h1>
                </div>

                <div className='flex flex-col justify-center pb-[350px]'>
                  <div>
                    <button className='text-[#2D2D2D] sm:text-[36px] text-[24px]  px-[24px] py-[15px] border border-[#3D61BC] rounded-[5px] font-medium' onClick={() => setIsConsultant(true)}>join as a Consultant</button>
                  </div>

                  <div className="md:px-[50px] sm:px-[40px] px-[30px] py-[55px] flex items-center before:mt-0.5 before:flex-1 before:border-t-[0.5px] before:border-[#4267B2] after:mt-0.5 after:flex-1 after:border-t-[0.5px] after:border-[#4267B2]">
                    <p className="mx-4 mb-0 text-center font-medium">OR</p>
                  </div>

                  <div>
                    <button className='text-[#2D2D2D] sm:text-[36px] text-[24px] px-[48px] py-[15px] border border-[#3D61BC] rounded-[5px] font-medium' onClick={() => setIsStudent(true)}>Join as a Student</button>
                  </div>
                </div>
              </div>
            }

            {/* consultant page */}
            {isConsultant &&
              <div className="md:w-[750px] sm:w-[500px] w-[350px] h-full inline-block bg-white overflow-hidden transform transition-all align-middle border-[0.3px] shadow-[2px_2px_2px_2px_rgba(0, 0, 0, 0.25)]" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className='flex justify-end pt-[10px] pr-[40px]'>
                  <button onClick={() => {setIsConsultant(false); closeModal();}} type="button" className='font-medium text-[24px]'>x</button>
                </div>
                  <div className='pt-[30px]'>
                    <h1 className='text-[#030303] md:text-[36px] sm:text-[30px]  text-[24px] font-semibold'>Welcome To Coherten</h1>
                    <h1 className='text-[#030303] md:text-[18px] sm:text-[16px] text-[12px] font-medium pt-[20px] pb-[30px]'>Update Your Consultant Profile to Improve Your Experience</h1>
                  </div>

                  <div>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:px-[50px] sm:px-[35px] px-[15px] gap-5 text-left'>
                      <div className='w-full'>
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Full Name*</p>
                        <input type="text" placeholder='John James' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                        
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Email Address*</p>
                        <input type="email" placeholder='johnjames@21example.com' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                        
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Country*</p>
                        <input type="text" placeholder='United Kingdom' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                        
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Postal Code*</p>
                        <input type="text" placeholder='254165' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                        
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Education*</p>
                        <input type="text" placeholder='Masters in Computer' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                      </div>

                      <div className='w-full'>
                        <div className='grid grid-cols-2 gap-x-2'>
                          <div>                        
                            <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Gender*</p>
                            <select
                              id="location"
                              name="location"
                              className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[10px]'
                            >
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </select>
                          </div>

                          <div>       
                            <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>DOB*</p>
                            <input type="date"
                              className='w-full border-[3px] rounded-[5px] text-[18px] font-medium h-[50px] border-[#E5EEFF] pl-[10px]'/>
                          </div>
                        </div>

                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Contact No*</p>
                        {/* <input type="text" placeholder='London' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/> */}
                        <PhoneInput
                          inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                          }}
                          // className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]' 
                        />
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>City*</p>
                        <input type="text" placeholder='London' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>

                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Total Experience*</p>
                        <input type="text" placeholder='3 year' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>

                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>College name*</p>
                        <input type="text" placeholder='Oxford University' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                      </div>
                    </div>
                    
                    <div className='md:px-[50px] sm:px-[35px] px-[15px] text-left'>
                      <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Address*</p>
                      <input type="text" placeholder='74,Plaza road new jersey , London, UK' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                    </div>
                  </div>

                  <div className='py-[20px]'>
                    <Link
                        to="/signup"
                        className="rounded-[10px] px-[100px] py-[20px] text-[24px] font-semibold leading-normal text-white"
                        style={{background: "linear-gradient(265.87deg, #3D61BC 1.6%, #2273BB 99.12%)"}}
                        >
                        Done
                    </Link>
                  </div>
              </div>
            }

            {/* student page */}
            {isStudent &&
              <div className="md:w-[750px] sm:w-[500px] w-[350px] h-full inline-block bg-white overflow-hidden transform transition-all align-middle border-[0.3px] shadow-[2px_2px_2px_2px_rgba(0, 0, 0, 0.25)]" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className='flex justify-end pt-[10px] pr-[40px]'>
                  <button onClick={() => {setIsStudent(false); closeModal();}} type="button" className='font-medium text-[24px]'>x</button>
                </div>
                  <div className='pt-[30px]'>
                    <h1 className='text-[#030303] md:text-[36px] sm:text-[30px]  text-[24px] font-semibold'>Welcome To Coherten</h1>
                    <h1 className='text-[#030303] md:text-[18px] sm:text-[16px] text-[12px] font-medium pt-[20px] pb-[30px]'>Update Your Student Profile to Improve Your Experience</h1>
                  </div>

                  <div>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:px-[50px] sm:px-[35px] px-[15px] gap-5 text-left'>
                      <div className='w-full'>
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Full Name*</p>
                        <input type="text" placeholder='John James' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                        
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Email Address*</p>
                        <input type="email" placeholder='angelwhite@15example.com' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                        
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Country*</p>
                        <input type="text" placeholder='United Kingdom' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                        
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Postal Code*</p>
                        <input type="text" placeholder='254445' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                        
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Current Education*</p>
                        <input type="text" placeholder='Higher School' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                      </div>

                      <div className='w-full'>
                        <div className='grid grid-cols-2 gap-x-2'>
                          <div>                        
                            <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Gender*</p>
                            <select
                              id="location"
                              name="location"
                              className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[10px]'
                              defaultValue="Canada"
                            >
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </select>
                          </div>

                          <div>       
                            <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>DOB*</p>
                            <input type="date"
                              className='w-full border-[3px] rounded-[5px] text-[18px] font-medium h-[50px] border-[#E5EEFF] pl-[10px]'/>
                          </div>
                        </div>

                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Contact No*</p>
                        {/* <input type="text" placeholder='London' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/> */}
                        <PhoneInput
                          inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                          }}
                          // className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]' 
                        />
                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>City*</p>
                        <input type="text" placeholder='New York' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>

                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>School/College name*</p>
                        <input type="text" placeholder='Howard Hr. Sec. School' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>

                        <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Interest/Hobby*</p>
                        <input type="text" placeholder='Singing , traveling , Camping' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                      </div>
                    </div>
                    
                    <div className='md:px-[50px] sm:px-[35px] px-[15px] text-left'>
                      <p className='text-[20px] font-medium pt-[15px] pb-[10px]'>Address*</p>
                      <input type="text" placeholder='71, New Plaza road New York , London, UK' className='w-full border-[3px] rounded-[5px] text-[20px] font-medium h-[50px] border-[#E5EEFF] pl-[20px]'/>
                    </div>
                  </div>

                  <div className='py-[20px]'>
                    <Link
                        to="/signup"
                        className="rounded-[10px] px-[100px] py-[20px] text-[24px] font-semibold leading-normal text-white"
                        style={{background: "linear-gradient(265.87deg, #3D61BC 1.6%, #2273BB 99.12%)"}}
                        >
                        Done
                    </Link>
                  </div>              
              </div>
            }

          </div>
        </div>
      )}
    </>
  );
}

export default Modal