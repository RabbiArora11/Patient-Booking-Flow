import { useNavigate } from "react-router-dom"

function PatientHome() {
    const navigate = useNavigate()
    return (
        <div className="mt-10 flex gap-4 items-center justify-center">
            <button onClick={() => navigate('/check-appointments')} className="w-full sm:w-auto px-8 py-5 rounded-3xl bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
                Check Appointments
            </button>
            <button onClick={() => navigate('/book-appointment')} className="w-full sm:w-auto px-8 py-5 rounded-3xl bg-green-600 text-white text-lg font-semibold shadow-lg hover:bg-green-700 transition">
                Get an appointment
            </button>
        </div>
    )
}

export default PatientHome