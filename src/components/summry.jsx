import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import plansSlice from './plansSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const Summary = () => {
        const selectedPlan = useSelector(state => state.plans.selectedPlan);
        const selectedAddons = useSelector(state => state.addons.selectedAddons);
        const {name , email , phone} = useSelector(state => state.form)
        const navigate = useNavigate();
        useEffect(()=>{
            console.log(selectedPlan , selectedAddons);
        })
        if (!selectedPlan) {
            return <div className='text-4xl text-sky-950 font-bold flex items-center justify-center w-full h-full'>Please Select a Plan</div>; // Add a loading state or a fallback UI
          }
          
          const isMonthly = selectedPlan.price < 20;
          const totalAddonPrice = selectedAddons
    ? selectedAddons.reduce((total, addon) => {
        return total + (isMonthly ? addon.price / 10 : addon.price);
      }, 0)
    : 0;
    const totalPrice = selectedPlan.price + totalAddonPrice;

    const handleConfirm = ()=>{
        if(!name || !email || !phone){ Swal.fire({
            icon: 'error',
            title: 'Please Complelte Your Info',
            
          })}
         else{
            navigate('/confirm')
         }
    }

    return ( <>
                <div className='flex flex-col  justify-center pt-10 w-[80%] ml-[auto]'>
                    <div className='mb-[4rem]'> 
                          <h1 className='form-heading'>Finshing up</h1>
                          <p className='form-description text-gray-500 font-light text-sm'>Double-check everything looks okay before confirming</p>
                    </div>
                    <div className='bg-gray-100 w-[90%] p-4 h-[50%] rounded-lg'>
                        <div className="main-plan flex justify-between items-center h-[80%] border-b-2 border-gray-300 pb-5">
                            <div>
                            <p className='font-semibold text-lg text-sky-950'>{selectedPlan.heading} {selectedPlan.price < 20 ? '(Monthly)' : '(yealry)'} </p>
                            <p className='underline text-gray-500'>change</p>
                            </div>
                            <div>
                                <p className='font-semibold text-lg text-sky-950'>${selectedPlan.price}/ {selectedPlan.price <20 ? 'Mo': 'Yr'}</p>
                            </div>
                        
                        </div>
                                        <div className="flex flex-col mt-5">
                        {selectedAddons && selectedAddons.length > 0 ? (
                            selectedAddons.map(addon => (
                            <div key={addon.id} className="flex justify-between mb-5">
                                <p className='text-gray-500'>{addon.heading}</p>
                                <p>
                                {selectedPlan.price < 20
                                    ? `+$${addon.price / 10} /Mo`
                                    : `+$${addon.price} /Yr`}
                                </p>
                            </div>
                            ))
                        ) : (
                            <p>No addons selected</p>
                        )}
                        </div>
                    </div>
                    <div className='flex justify-between w-[90%] p-4'>
                        <p className='text-lg text-gray-500 font-semibold'>Total{isMonthly ? '(per month)' : '(per year)'}</p>
                        <p className='text-lg text-sky-700 font-semibold'>+${totalPrice}/{isMonthly?'Mo' :'Yr'}</p>
                    </div>
                    <div className='flex justify-between w-[90%] mt-[4rem]'>
                        <button
                         className='bg-white h-[3rem] w-[6rem] rounded-lg text-gray-500 font-semibold'
                         onClick={()=> navigate('/addons')}>
                                    Go Back
                                    </button>
                        <button 
                        className='bg-cyan-950 h-[3rem] w-[8rem] p-2 rounded-lg text-white font-semibold'
                        onClick={handleConfirm}>
                                    Confirm
                                    </button>
                     </div>
                </div>
                </> );
}
 
export default Summary;