"use client"

import { useState } from "react"
import { DashboardSidebar } from "./dashboard-sidebar"
import { DashboardHeader } from "./dashboard-header"

export function DashboardShell({ children, user }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Determinar qué dashboard mostrar según el rol del usuario
  const renderDashboardByRole = () => {
    return children
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        userRole={user?.role || "editor"}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader user={user} toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="flex-1 overflow-y-auto p-6">{renderDashboardByRole()}</main>
      </div>
    </div>
  )
}
