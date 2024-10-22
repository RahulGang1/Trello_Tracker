import React from 'react'
import Navbar2 from './Navbar2'
import Data from './Data'
import Calendar from './Calendar'
import Messages from "./Messages"
import OverviewPage from './OverviewPage';
import Dashboard from './Dashboard';
import Timeline from './Timeline'
import List from './List'
import Form from './Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Addrout() {
  return (
    <div>

    <Router>
        <Navbar2 />
        <Routes>
          <Route path='/' element={<Data/>} />
          <Route path='/Overview' element={<OverviewPage/>} />
          <Route path='/list' element={<List />} />
          <Route path='/Timeline' element={<Timeline/>} />
          <Route path='/Calendar' element={<Calendar/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Messages' element={<Messages/>} />
          <Route path='/Login/Signup' element={<Form/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default Addrout