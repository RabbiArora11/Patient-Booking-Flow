import { useState } from 'react'
import { AppProvider } from './context/AppContext'
import HeaderBar from './components/HeaderBar'
import Home from "./pages/Home"
import UserType from "./pages/UserType"
import LogIn from "./components/LogIn"
import BookAppointment from './pages/BookAppointment'
import SuccessfulBooking from './pages/SuccessfulBooking'
import CheckAppointments from './pages/CheckAppointments'
import CheckAppointmentsAdmin from './pages/CheckAppointmentsAdmin'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

function App() {

  return (
    <AppProvider>
      <div className="h-screen bg-gray-100 flex flex-col">  
      <div>
        <HeaderBar />
      </div>
        <div className="flex-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserType />} />
            <Route path="/login/:userType" element={<LogIn />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/successful-booking" element={<SuccessfulBooking />} />
            <Route path="/check-appointments" element={<CheckAppointments />} />
            <Route path="/check-appointments-admin" element={<CheckAppointmentsAdmin />} />
          </Routes>
        </BrowserRouter>
      </div>        
    </div>
    </AppProvider>
  )

}

export default App
