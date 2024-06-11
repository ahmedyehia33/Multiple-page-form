import React from 'react';

const Confirm = () => {
    return ( 
        <div className="flex flex-col w-[100%] h-[100%] items-center justify-center">
            <div className="logo-container">
                <img src='/assets/images/icon-thank-you.svg' />
            </div>
            <div className="header">
                <h1 className='text-4xl font-bold text-sky-900 mt-[2rem]'>Thank you!</h1>
            </div>
            <div className="description w-[80%] mt-[1.5rem]">
                <p className='text-gray-400'>thanks for confriming your subscription! We hope you have fun using our platform. if you ever need support contact us ..</p>
            </div>

        </div>
     );
}
 
export default Confirm;