import { configureStore } from "@reduxjs/toolkit";
import plansReducer from './plansSlice';
import addonsReducer from '../addonsSlice';
import formReducer from "./formSlice";



const store = configureStore({
    reducer: {
      plans: plansReducer,
      addons: addonsReducer,
      form: formReducer,
    },
  });

  export default store;