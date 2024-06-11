import React from 'react';
import { Outlet } from 'react-router-dom';
import Page from './page';
import Sidebar from './sidebar.jsx';


const Layout = () => {
    return ( 
            <>
            <div className="container w-[53rem] h-[40rem] bg-white shadow-lg grid grid-cols-3 ml-3 p-2 rounded-lg">
                <div className='col-span-1'> 
                    <Sidebar/>
                </div>
                <div className='col-span-2'> 
                    <Outlet />
                </div>
            </div>
            
            </>
     );
}
 
export default Layout;