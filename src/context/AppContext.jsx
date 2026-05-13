import { createContext, useContext, useState } from 'react'
import {appointments} from "../data/Appointments"
import { timeSlots } from '../data/TimeSlots'
import { users } from '../data/Users'


const AppContext = createContext()

export function AppProvider({ children }) {

  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem('userInfo')
    return saved ? JSON.parse(saved) : null
  })

  const [bookings, setBookings] = useState(() => {    
    const saved = localStorage.getItem('bookings')
    return saved ? JSON.parse(saved) : appointments
  })

  const addBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: Math.max(0, ...bookings.map(b => b.id)) + 1,
      status: 'pending'
    }
    const updated = [...bookings, newBooking]
    setBookings(updated)
    localStorage.setItem('bookings', JSON.stringify(updated))
    return newBooking.id
  }

  const updateStatus = (id, status) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status: status } : b)
    setBookings(updated)
    localStorage.setItem('bookings', JSON.stringify(updated))
  }

  const isLoggedIn = () => {
    return userInfo !== null
  }

  return (
    <AppContext.Provider value={{userInfo, setUserInfo, isLoggedIn, bookings, addBooking, updateStatus }}>
      {children}
    </AppContext.Provider>
  )
}
export const useApp = () => useContext(AppContext)
