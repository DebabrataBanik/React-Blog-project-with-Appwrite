import { useState, useEffect } from "react"
import { login, logout } from "./store/authSlice"
import authService from "./appwrite/auth"
import { useDispatch } from "react-redux"
import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom"

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then(userData => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch(error => {
        console.log("Error fetching user:", error);
      })
      .finally(() => setLoading(false));
  }, [dispatch]);



  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null

}

export default App

