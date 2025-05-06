"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { AdminDashboard } from "@/components/role-dashboards/admin-dashboard"

export default function Home() {
  // En un caso real, esto vendría de una autenticación
  const [user, setUser] = useState({
    name: "Admin Usuario",
    email: "admin@ejemplo.com",
    role: "admin",
    avatar: "",
  })

  return (
    <DashboardShell user={user}>
      <AdminDashboard />
    </DashboardShell>
  )
}
