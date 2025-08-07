import React from "react"

type Props = {
  title: string
  value: string
  change?: string
}

export default function DashboardCard({ title, value, change }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-xl font-bold">{value}</p>
      {change && <p className="text-sm text-green-600">{change}</p>}
    </div>
  )
}
