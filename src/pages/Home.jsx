import { useApp } from "../context/AppContext"
import PatientHome from "../components/PatientHome"
import AdminHome from "../components/AdminHome"

function Home() {

    const { userInfo, isLoggedIn } = useApp()

    return (
        <div className="h-full flex grow flex-col m-5" >
            {!isLoggedIn() ? (
            <div>
                <h1 className="text-6xl font-semibold">
                    Welcome to the clinic!
                </h1>
            </div>
            ) : (
             <>
             <div>
                <h1 className="text-6xl font-semibold">
                    Welcome to the clinic {userInfo.name}!
                </h1>
            </div>
                <div>
                {userInfo.userType === "physician" ? <AdminHome /> : <PatientHome />}
                </div>
             </>   
            )}
        </div>
    )
}

export default Home