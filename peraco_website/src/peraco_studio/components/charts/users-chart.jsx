"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export function UsersChart() {
  // Datos de ejemplo
  const data = [
    { name: "Administradores", value: 4, color: "#16502D" },
    { name: "Supervisores", value: 6, color: "#1B8F31" },
    { name: "Diseñadores", value: 8, color: "#9CC200" },
    { name: "Editores", value: 12, color: "#D4E79E" },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
