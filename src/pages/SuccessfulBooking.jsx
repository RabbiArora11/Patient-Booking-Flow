import { useNavigate } from "react-router-dom"

function SuccessfulBooking() {
    const navigate = useNavigate();

    return (
        <div className="h-full flex grow flex-col m-5" >
            <div className="flex justify-center">
                <h1 className="text-6xl font-semibold">
                    Appointment Booked Succesfully!
                </h1>
            </div>
            <div className="mt-10 flex gap-4 items-center justify-center">
                <button onClick={() => navigate('/')} className="w-full sm:w-auto px-8 py-5 rounded-3xl bg-purple-600 text-white text-lg font-semibold shadow-lg hover:bg-purple-700 transition">
                    Back to Home
                </button>
                <button onClick={() => navigate('/book-appointment')} className="w-full sm:w-auto px-8 py-5 rounded-3xl bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
                    Book Another Appointment
                </button>
                <button onClick={() => navigate('/check-appointments')} className="w-full sm:w-auto px-8 py-5 rounded-3xl bg-green-600 text-white text-lg font-semibold shadow-lg hover:bg-green-700 transition">
                    Check Appointments
                </button>
            </div>
        </div>
    )
}

export default SuccessfulBooking