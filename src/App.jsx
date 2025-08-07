import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/LoginPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="flex h-screen bg-gray-50">
    //   <Sidebar />
    //   <div className="flex flex-col flex-1 overflow-y-scroll">
    //     <Navbar />
    //     <Dashboard />
    //   </div>
    // </div>
    <div>
      <LoginPage />
    </div>
  )
}

export default App
