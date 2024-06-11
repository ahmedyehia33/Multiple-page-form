import {createSlice} from '@reduxjs/toolkit';

import { monthlyPlans, yearlyPlans } from '../plans';

const initialState = {
    planType:'monthly',
    plans: monthlyPlans,
    selectedPlan: null
}

const plansSlice = createSlice({
    name:'plans',
    initialState,
    reducers:{
        togglePlans:(state)=>{
           state.planType = state.planType === 'monthly' ? 'yearly' : 'monthly';
           state.plans = state.planType === 'monthly' ? monthlyPlans : yearlyPlans ;     
        },

        selectPlan: (state , action)=>{
                    state.selectedPlan = action.payload
                    console.log(state.selectedPlan)
        }
    }
});

export const {togglePlans , selectPlan} = plansSlice.actions;

export default plansSlice.reducer;
