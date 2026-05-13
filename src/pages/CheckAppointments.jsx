import { useApp } from "../context/AppContext"
import { takenTimeSlots as initialTakenTimeSlots } from "../data/TakenTimeSlots"
import { useState } from "react"

function CheckAppointments() {
    const { bookings, userInfo, updateStatus } = useApp()

    const [takenSlots, setTakenSlots] = useState(() => {
        const saved = localStorage.getItem('takenTimeSlots')
        return saved ? JSON.parse(saved) : initialTakenTimeSlots
    })

    const appointments = bookings.filter(
    booking => booking.patientID === userInfo.id
)

    const cancleAppointment = (id) => {
        const appointment = appointments.find(a => a.id === id)
        if (appointment) {
            updateStatus(id, 'cancelled')
            
            const updatedTakenSlots = takenSlots.filter(slot => !(slot.physicianID == appointment.physicianID && slot.timeSlotID == appointment.timeSlotID))
            setTakenSlots(updatedTakenSlots)
            localStorage.setItem('takenTimeSlots', JSON.stringify(updatedTakenSlots))
        }
    }

    return (
        <div className="space-y-4 flex grow flex-col m-5">
            <div>{appointments.length>0 ? (
            <h1 className="text-4xl font-semibold">Your Appointments</h1>
            ):(
                <h1 className="text-4xl font-semibold">You have no appointments booked</h1>
            )} </div>
            {appointments.map((appointment) => (

                <div key={appointment.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

                    <div className="flex justify-between items-start mb-3">

                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                {appointment.physician}
                            </h2>

                            <p className="text-gray-500">
                                {appointment.date} • {appointment.time}
                            </p>
                        </div>

                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                            {appointment.status}
                        </span>

                    </div>

                    <div className="flex flex-end justify-between items-start mb-3">

                        <div>
                            <p >
                                Reason For Visit: {appointment.reason}
                            </p>

                            <p >
                                Additional Notes: {appointment.notes}
                            </p>
                        </div>
                        <div> {appointment.status !== "cancelled" && (
                            <button
                                onClick={() =>  cancleAppointment(appointment.id) }
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Cancel Appointment
                            </button>
                        )}
                        </div>


                    </div>

                </div>

            ))}

        </div>
    )
}

export default CheckAppointments