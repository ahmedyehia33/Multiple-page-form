import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name:'',
    email: '',
    phone:''
}

const formSLice = createSlice({
    name: 'form',
    initialState,
    reducers:{
        setName:(state, action)=>{
            state.name = action.payload
        },
        setEmail:(state, action)=>{
            state.email = action.payload
        },
        setPhone: (state, action)=>{
            state.phone = action.payload
        }
    }
})

export const  {setName , setEmail , setPhone} = formSLice.actions;
export default formSLice.reducer
