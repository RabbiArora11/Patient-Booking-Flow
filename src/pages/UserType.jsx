import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function UserType() {

    const navigate = useNavigate()

    return(
        <div className="h-full flex overflow-hidden items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md items-center">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
                    Select User Type
                </h1>

                <div className="mb-4">
                    <button         
                        onClick={() => navigate("/login/patient")}
                        className={`w-full border rounded-lg p-3 mb-4 active:bg-blue-600 active:text-white`}
                        
                    >
                        Patient
                    </button>
        
                    <button
                        onClick={() => navigate("/login/physician")}
                        className={`w-full border rounded-lg p-3 active:bg-blue-600 active:text-white`}
                    >
                        Physician
                    </button>
                </div>
            </div>
        </div>
    )

}
export default UserType