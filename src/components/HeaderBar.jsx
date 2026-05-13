import { useApp } from '../context/AppContext'

function HeaderBar() {
  const { isLoggedIn } = useApp()
  const { userInfo } = useApp()
  const { setUserInfo } = useApp()

  const handleLogout = () => {
    console.log("logging out")
    localStorage.removeItem('userInfo')
    setUserInfo(null)
    isLoggedIn()
  }

  return (
    <header className="w-full border-b bg-white shadow-sm">
      
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-4xl font-bold text-blue-600">
          Patient Booking Flow
        </a>
        
        <div>
        {!isLoggedIn() ? (
          <nav className="pr-4 flex gap-6 text-gray-600 font-medium">
            <a href="/login" className="hover:text-blue-600">
              Sign In
            </a>
          </nav>
        ) : (
          <>
            <nav className="pr-4 flex gap-6 text-gray-600 font-medium" >
                <a href="/" className="hover:text-blue-600" onClick={handleLogout}>
                  Sign Out
                </a>
            </nav>
          </>
        )
        }
        </div>
      </div>
    </header>
  )
}

export default HeaderBar