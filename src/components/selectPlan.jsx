import React from 'react';
import PlansCards from './plansCards';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';




const SelectPlan = () => {
    const selectedPlan = useSelector(state => state.plans.selectedPlan);

    const navigate = useNavigate();

    const handleNext = ()=>{
        if(!selectedPlan){ Swal.fire({
            icon: 'error',
            title: 'Please select a plan',
            
          })}
          else{
            navigate('/addons')
          }
        }
        
    
    
    
    return ( <>
                <div className='flex flex-col items-center w-[100%] h-[100%] justify-center overflow-hidden'>
                    <div className='mb-[2rem]'>
                <h1 className='form-heading'>Select your plan</h1>
                    <p className='form-description text-gray-500 font-light text-sm'>
                        you have the option of monthly or yearly billing
                        </p>
                </div>
                <div className='mt-[2rem]'>
                   <PlansCards/>
                </div>
                <div className='flex justify-between w-[90%] mt-[2.5rem]'>
                <button 
                className='bg-white h-[3rem] w-[6rem] rounded-lg text-gray-500 font-semibold'
                onClick={()=> navigate('/')}>
                            Go Back
                            </button>
                <button 
                className='bg-cyan-950 h-[3rem] w-[8rem] p-2  rounded-lg text-white font-semibold'
                onClick={handleNext}>
                            Next step
                            </button>
                </div>
                </div>
            </> );
}
 
export default SelectPlan;