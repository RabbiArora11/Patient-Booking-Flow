import { users } from "../data/Users"
import { timeSlots } from "../data/TimeSlots"
import { takenTimeSlots as initialTakenTimeSlots } from "../data/TakenTimeSlots"
import { useNavigate } from "react-router-dom"
import { useApp } from "../context/AppContext"
import { useState, useEffect } from "react"

function BookAppointment() {
    const navigate = useNavigate();
    const { addBooking } = useApp()
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))

    const [selectedPhysician, setSelectedPhysician] = useState(null)
    const [takenTimeSlots, setTakenTimeSlots] = useState(() => {
        const saved = localStorage.getItem("takenTimeSlots")
        return saved ? JSON.parse(saved) : initialTakenTimeSlots
    })

    const physicians = users.filter(user => user.userType === "physician")

    const findAvailableSlots = (physician) => {
        console.log("all slots:", timeSlots)
        if (!physician) return []
        const takenSlots = takenTimeSlots.filter(slot => slot.physicianID == physician.id)
        const takenIDs = takenSlots.map(slot => parseInt(slot.timeSlotID))
        console.log("filtered slots:", timeSlots.filter(slot => !takenIDs.includes(slot.id)))
        return timeSlots.filter(slot => !takenIDs.includes(slot.id))
    }

    var availableSlots = findAvailableSlots(selectedPhysician)

    useEffect(() => {
        if (physicians.length > 0 && !selectedPhysician) {
            setSelectedPhysician(physicians[0])
        }
    }, [physicians, selectedPhysician])

    const confirmBooking = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const physicianId = formData.get("physician")
        const physician = physicians.find(p => p.id === parseInt(physicianId))
        const timeSlotId = formData.get("timeSlot")
        const timeSlot = timeSlots.find(s => s.id === parseInt(timeSlotId))
        const reason = formData.get("reason")
        const notes = formData.get("notes")

        const newTakenSlot = { physicianID: physician.id, timeSlotID: timeSlot.id }
        const updatedTakenSlots = [...takenTimeSlots, newTakenSlot]
        setTakenTimeSlots(updatedTakenSlots)
        localStorage.setItem("takenTimeSlots", JSON.stringify(updatedTakenSlots))

        const bookingDetails = {
            patient: userInfo.name,
            patientID: userInfo.id,
            physician: physician.name,
            physicianID: physician.id,
            date: timeSlot.date,
            time: timeSlot.time,
            timeSlotID: timeSlot.id,
            reason: reason,
            notes: notes
        }
        addBooking(bookingDetails)

        navigate("/successful-booking")
    }

    return (
        <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md space-y-6" onSubmit={confirmBooking}>
            <h1 className="text-2xl font-bold text-gray-800">Booking Details</h1>

            <div>
                <label className="block mb-2 font-medium text-gray-700">
                    Select Physician
                </label>

                <select name="physician" value={selectedPhysician?.id || ""} className="w-full border border-gray-300 rounded-lg p-3" onChange={(e) => setSelectedPhysician(physicians.find(p => p.id === parseInt(e.target.value)))}>
                    {physicians.map(physician => (
                        <option key={physician.id} value={physician.id}>
                            Dr. {physician.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block mb-2 font-medium text-gray-700">
                    Select Appointment Time
                </label>

                <select name="timeSlot" key={selectedPhysician?.id} className="w-full border border-gray-300 rounded-lg p-3">
                    {availableSlots.map(slot => (
                        <option key={slot.id} value={slot.id}>
                            {slot.date} at {slot.time}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block mb-2 font-medium text-gray-700">
                    Reason For Visit
                </label>

                <select name="reason" className="w-full border border-gray-300 rounded-lg p-3">
                    <option>General Checkup</option>
                    <option>Follow-up Visit</option>
                    <option>Prescription Refill</option>
                    <option>Feeling Unwell</option>
                    <option>Consultation</option>
                </select>
            </div>

            <div>
                <label className="block mb-2 font-medium text-gray-700">
                    Additional Notes
                </label>

                <textarea
                    name="notes"
                    placeholder="Add any additional details..."
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg p-3 resize-none"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition"
            >
                Book Appointment
            </button>

        </form>
    )
}

export default BookAppointment



