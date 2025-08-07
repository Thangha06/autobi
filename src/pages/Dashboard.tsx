import React from "react"
import DashboardCard from "../components/DashboardCard"
import PortfolioChart from "../components/PortfolioChart"

export default function Dashboard() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard title="Total AUM" value="$12.5M" change="+4.2%" />
        <DashboardCard title="Clients" value="78" change="+2 this month" />
        <DashboardCard title="Avg Portfolio Size" value="$160K" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PortfolioChart />
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✔️ New client onboarded: John Doe</li>
            <li>📈 Portfolio rebalanced: Smith Family</li>
            <li>📄 Generated quarterly report for Anand</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
