import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return ( <>
          
          <div className='w-[100%]  h-[100%]  side-bar rounded-lg flex flex-col gap-8   pt-[3rem] pl-3 pr-3 '>
          <Link to='/'> <div className="flex">
                     <div className="h-[2.5rem] w-[2.5rem] text-white rounded-full border border-white b-2 flex justify-center items-center">
                            <strong>1</strong>
                        </div>
                        <div className="info flex flex-col ml-5">
                            <span className='text-gray-200  text-base'>
                                STEP 1
                            </span>
                            <span className='text-white text-lg font-bold'>
                                YOUR INFO
                            </span>

                        </div>  
                    </div></Link>
                  <Link to='/planselection' > <div className="flex">
                    <div className="h-[2.5rem] w-[2.5rem] rounded-full text-white border border-white b-4 flex justify-center items-center">
                            <strong>2</strong>
                        </div>
                        <div className="info flex flex-col ml-5">
                            <span className='text-gray-200  text-base'>
                                STEP 2
                            </span>
                            <span className='text-white text-lg font-bold'>
                               SELECT PLAN
                            </span>

                        </div>
                    </div></Link>
                  <Link to='/addons'>  <div className="flex">
                    <div className="h-[2.5rem] w-[2.5rem] rounded-full text-white border border-white b-2 flex justify-center items-center">
                            <strong>3</strong>
                        </div>
                        <div className="info flex flex-col ml-5">
                            <span className='text-gray-200  text-base'>
                                STEP 3
                            </span>
                            <span className='text-white text-lg font-bold'>
                                ADD-ONS
                            </span>

                        </div>
                    </div></Link>
                  <Link to='/summary'>  <div className="flex">
                    <div className="h-[2.5rem] w-[2.5rem] rounded-full border text-white border-white b-2 flex justify-center items-center">
                            <strong>4</strong>
                        </div>
                        <div className="info flex flex-col ml-5">
                            <span className='text-gray-200  text-base'>
                                STEP 4
                            </span>
                            <span className='text-white text-lg font-bold'>
                               SUMMARY
                            </span>

                        </div>
                    </div></Link>
                </div>

            </>);
}
 
export default Sidebar;