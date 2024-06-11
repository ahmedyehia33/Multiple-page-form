import { createSlice } from "@reduxjs/toolkit";
import { addons } from "./addons";

const initialState = {
        selectedAddons:[],
        addons: addons,

}

const addonsSlice = createSlice({
    name: 'addons',
    initialState,
    reducers:{
        addAddon:(state, action)=>{
          state.selectedAddons.push(action.payload);


        },
     removeAddon:(state, action)=>{
       state.selectedAddons = state.selectedAddons.filter((addon) => addon.id !== action.payload.id);
     }   
    }
});

export const {addAddon , removeAddon} = addonsSlice.actions;
export default addonsSlice.reducer;