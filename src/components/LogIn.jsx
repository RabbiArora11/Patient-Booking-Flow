import { useState } from "react"
import { useParams } from "react-router-dom"
import { users } from "../data/Users"
import { useApp } from "../context/AppContext"

function Login() {
  const [selectedEmail, setSelectedEmail] = useState("")
  const params = useParams()
  const userType = params.userType
  const { setUserInfo } = useApp()

  const filteredUsers = userType ? users.filter((user) => user.userType === userType): users

  const selectedUser = filteredUsers.find((user) => user.email === selectedEmail)

  const handleLogin = () => {
    if (!selectedUser) return

    setUserInfo(selectedUser)
    localStorage.setItem("userInfo", JSON.stringify(selectedUser))
    window.location.href = "/"
    
  }

  return (
    <div className="h-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Sign In
        </h1>

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <select
            value={selectedEmail}
            onChange={(e) => setSelectedEmail(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option value="" disabled>
              Select an email
            </option>
            {filteredUsers.map((user) => (
              <option key={user.id} value={user.email}>
                {user.email}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type = "password"
            className="w-full border rounded-lg p-3"
          >
          </input>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Login