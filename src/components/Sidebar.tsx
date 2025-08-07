import React from "react"

const menu = [
  { label: "Dashboard", link: "#" },
  { label: "Clients", link: "#" },
  { label: "Portfolios", link: "#" },
  { label: "Reports", link: "#" },
]

export default function Sidebar() {
  return (
    <aside className="bg-gray-100 w-64 h-screen p-6 border-r">
      <ul className="space-y-4">
        {menu.map((item) => (
          <li key={item.label}>
            <a href={item.link} className="text-gray-700 hover:text-indigo-600">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
