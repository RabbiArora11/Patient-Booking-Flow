import { useNavigate } from "react-router-dom"

function AdminHome() {
    const navigate = useNavigate()

    return (
        <div className="mt-10 flex grow gap-4 items-center justify-center">
            <button onClick={() => navigate('/check-appointments-admin')} className="w-full sm:w-auto px-8 py-5 rounded-3xl bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
                Check Appointments
            </button>
        </div>
    )
}

export default AdminHome