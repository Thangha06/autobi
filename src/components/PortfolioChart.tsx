import React from "react"
import { PieChart, Pie, Cell, Tooltip } from "recharts"

const data = [
  { name: "Equity", value: 400 },
  { name: "Fixed Income", value: 300 },
  { name: "Cash", value: 300 },
  { name: "Alternatives", value: 200 },
]

const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"]

export default function PortfolioChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <h2 className="text-lg font-semibold mb-2">Asset Allocation</h2>
      <PieChart width={250} height={250}>
        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  )
}
