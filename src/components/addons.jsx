import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAddon, removeAddon } from '../addonsSlice';
import { Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Addons = () => {
            const addons =  useSelector(state=> state.addons.addons);
            const dispatch = useDispatch();
            const navigate = useNavigate();
            const selectedAddons = useSelector(state => state.addons.selectedAddons);
            useEffect(()=>{
                console.log(addons);
                console.log(selectedAddons)
            })
        
            const handleClick = (a)=>{
                if(selectedAddons.some((selectedAddon) => selectedAddon.id === a.id )){
                    dispatch(removeAddon(a));
                }
                else{
                    dispatch(addAddon(a))
                }
            }


    return (  <>
             <div className='flex flex-col  justify-center pt-5 w-[80%] ml-[auto]'>
                    <div className='mb-[2rem]'> 
                          <h1 className='form-heading'>Select Addons</h1>
                          <p className='form-description text-gray-500 font-light text-sm'>Addons helps enhance your game experince</p>
                    </div>
                    <div className='flex flex-col w-[100%]  gap-9'>
                        {addons.map((a)=> (
                                    <div 
                                    key={a.id}
                                    className={`addon-container ${selectedAddons.some((addon)=> addon.id === a.id ) ? 'bg-gray-100 border border-sky-500 b-4' : 'border border-gray-300'} rounded-lg flex w-[90%] h-[6rem] gap-5 items-center justify-around`}>
                                        <div>
                                            <Checkbox 
                                             checked={selectedAddons.some((addon)=> addon.id === a.id )}
                                            onClick={()=> handleClick(a)}/>
                                        </div>
                                        <div>
                                            <h2 className='text-lg font-semibold text-sky-500'>{a.heading}</h2>
                                            <p className='text-md font-thin text-gray-500'>{a.description}</p>
                                        </div>
                                        <div>
                                           <p className='text-lg font-semibold text-sky-500'> +${a.price}/year</p>
                                        </div>
                                    </div>

                                        ))}

                    </div>
                    <div className='flex justify-between w-[90%] mt-[4rem]'>
                        <button
                         className='bg-white h-[3rem] w-[6rem] rounded-lg text-gray-500 font-semibold'
                         onClick={()=> navigate('/planselection')}>
                                    Go Back
                                    </button>
                        <button 
                        className='bg-cyan-950 h-[3rem] w-[8rem] p-2 rounded-lg text-white font-semibold'
                        onClick={()=> navigate('/summary')}>
                                    Next step
                                    </button>
                     </div>
                   
                </div>
            </>);
}
 
export default Addons;