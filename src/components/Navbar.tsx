import React from "react"

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-700">Wealth Advisor</h1>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">Logout</button>
    </nav>
  )
}
