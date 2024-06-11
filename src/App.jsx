import React from 'react';
import Layout from './components/layout';
import { BrowserRouter, Route,Router,Routes  } from 'react-router-dom';
import YourInfo from './components/yourInfo';
import SelectPlan from './components/selectPlan';
import Addons from './components/addons';
import Summary from './components/summry';
import Confirm from './components/confirm';



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<YourInfo />} />
          <Route path='planselection' element={<SelectPlan/>}/>
          <Route path='addons'  element={<Addons/>} />
          <Route path='summary' element={<Summary/>} />
          <Route path='/confirm' element={<Confirm/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
