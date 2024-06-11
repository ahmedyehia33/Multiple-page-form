import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setEmail, setName, setPhone } from './formSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const YourInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    

    const {name , email, phone} = useSelector(state => state.form);
    useEffect(()=>{
        console.log(name , email , phone, errors);
        validate()

    }, [name, email,phone]);

    const validate = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'Email address is invalid';
        }
        if (!phone) newErrors.phone = 'Phone number is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
      
   const handleSumbit =(e)=>{
    e.preventDefault();
    if (validate()) {
        navigate('/planselection');
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Please check ...',
          html: `<ul>${Object.values(errors).map((error) => `<li>${error}</li>`).join('')}</ul>`,
        });
      }
    };

    return ( <>
            <div className='h-[100%] w-[100%] flex items-center justify-center'>
                <form>
                    <h1 className='form-heading'>Personal Info</h1>
                    <p className='form-description text-gray-500 font-light text-sm'>please provide your name, email adress, and phone number</p>
                    <div className='flex flex-col mt-5'>
                    <label className='text-lg font-semibold'>Name</label>
                    <input type='text' 
                        required 
                        className=' border-gray-500 border-2 focus:ring-0 active:ring-0' 
                        value={name} 
                        onChange={(e)=> dispatch(setName(e.target.value))}
                        placeholder='Enter your name'/>

                    <label className='text-lg font-semibold'>Email adress</label>
                    <input type='email' 
                        required
                        className='border border-gray-500 b-2 focus:ring-0 '
                        value={email}
                        onChange={(e)=> dispatch(setEmail(e.target.value))}
                        placeholder='Enter your email'/>

                    <label className='text-lg font-semibold'>Phone number</label>
                    <input type='text'
                     className='border border-gray-500 b-2 focus:ring-0 '
                     onChange={(e)=> dispatch(setPhone(e.target.value))}
                     value={phone}
                      placeholder='eg +01111111111' />
                    </div>
                    <div className='w-[100%] flex justify-end items-center mt-5'>
                        <button 
                        className='bg-cyan-950 h-[3rem] w-[8rem] p-2 rounded-lg text-white font-semibold'
                        onClick={handleSumbit}>
                            Next step
                            </button>
                        </div>
                </form>
            </div>
            </> );
}
 
export default YourInfo;