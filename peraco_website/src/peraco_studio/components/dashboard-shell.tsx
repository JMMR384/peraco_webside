"use client"

import { useState, type ReactNode } from "react"
import { AdminDashboard } from "@/components/role-dashboards/admin-dashboard"
import { DesignerDashboard } from "@/components/role-dashboards/designer-dashboard"
import { SupervisorDashboard } from "@/components/role-dashboards/supervisor-dashboard"
import { EditorDashboard } from "@/components/role-dashboards/editor-dashboard"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { UserNav } from "@/components/user-nav"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

// For demo purposes, we'll allow switching between roles
type UserRole = "admin" | "supervisor" | "designer" | "editor"

interface DashboardShellProps {
  children?: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [role, setRole] = useState<UserRole>("admin")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const pathname = usePathname()

  const getRoleLabel = (role: UserRole) => {
    switch (role) {
      case "admin":
        return "Administrador"
      case "supervisor":
        return "Supervisor"
      case "designer":
        return "Diseñador"
      case "editor":
        return "Editor"
      default:
        return role
    }
  }

  // Render the dashboard content based on the path
  const renderContent = () => {
    // If we're on a specific page, render the children (page component)
    if (pathname !== "/") {
      return children
    }

    // Otherwise, render the role-specific dashboard
    switch (role) {
      case "admin":
        return <AdminDashboard />
      case "supervisor":
        return <SupervisorDashboard />
      case "designer":
        return <DesignerDashboard />
      case "editor":
        return <EditorDashboard />
      default:
        return <AdminDashboard />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar role={role} collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

      {/* Main content area */}
      <div className="flex flex-1 flex-col w-full">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 shadow-sm">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="font-poppins text-xl tracking-wide text-green-dark font-medium">
                PORTAL DE ADMINISTRACIÓN
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as UserRole)}
                className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium"
              >
                <option value="admin">Administrador</option>
                <option value="supervisor">Supervisor</option>
                <option value="designer">Diseñador</option>
                <option value="editor">Editor</option>
              </select>
              <UserNav role={role} />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto w-full">{renderContent()}</main>
      </div>
    </div>
  )
}
