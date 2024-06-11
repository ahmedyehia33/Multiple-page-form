import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import { togglePlans, selectPlan } from './plansSlice';




const PlansCards = () => {
    const plans = useSelector(state => state.plans.plans);
    const selectedPlan = useSelector(state => state.plans.selectedPlan);
    const planType = useSelector(state => state.plans.planType);

    const dispatch = useDispatch();
  
    return ( 
          <>
          <div className='flex gap-4'>
          {plans.map((plan) => (
            <div 
            className={`cursor-pointer plan-card h-[12rem] w-[10rem] border ${plan === selectedPlan ? 'border-sky-500 b-4 bg-gray-100' : 'border-gray-200'} b-2  flex flex-col justify-between p-[0.8rem] rounded-lg`}
             key={plan.price}
             onClick={()=> dispatch(selectPlan(plan))}> 
            <div className='img-container'> <img src={plan.src} /></div>
            <div className="plan-description flex flex-col gap-1">
                <div className='text-lg font-semibold text-sky-900'>{plan.heading}</div>
                <div className='text-gray-500'>${plan.price}/ {plans[0].price > 20 ? 'Yearly' : 'Monthly'}</div>
                {plans[0].price > 20 ? <div className='font-semibold'>{plan.additional}</div> : ''}
                
            </div>
            </div>
          ) )}
          </div>
          <p className='flex w-[80%] ml-[auto] mr-[auto] justify-center mt-4 items-baseline bg-gray-100'> <span className='text-sky-900 text-lg font-semibold mr-4'>Monthly</span> <Switch onClick={()=> dispatch(togglePlans())} checked={planType =='yearly'} color='red' />  <span className='text-sky-900 text-lg font-semibold ml-4'>Yearly </span> </p>
          

          </>
     );
}
 
export default PlansCards;