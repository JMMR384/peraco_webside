"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Users,
  FileText,
  ImageIcon,
  CheckSquare,
  Bell,
  Settings,
  FolderClosed,
  FunctionSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { CompanyLogo } from "./company-logo"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function DashboardSidebar({ collapsed, setCollapsed, userRole }) {
  const pathname = usePathname()

  // Definir los elementos de navegación según el rol
  const navItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
      roles: ["admin", "supervisor", "designer", "editor"],
    },
    {
      title: "Usuarios",
      href: "/users",
      icon: Users,
      roles: ["admin"],
    },
    {
      title: "Noticias",
      href: "/news",
      icon: FileText,
      roles: ["admin", "supervisor", "editor"],
    },
    {
      title: "Editor de Noticias",
      href: "/news/editor",
      icon: FileText,
      roles: ["admin", "editor"],
    },
    {
      title: "Imágenes Publicitarias",
      href: "/advertising",
      icon: ImageIcon,
      roles: ["admin", "supervisor", "designer"],
    },
    {
      title: "Aprobaciones",
      href: "/approvals",
      icon: CheckSquare,
      roles: ["admin", "supervisor"],
    },
    {
      title: "Notificaciones",
      href: "/notifications",
      icon: Bell,
      roles: ["admin", "supervisor", "designer", "editor"],
    },
    {
      title: "Procedimientos",
      href: "/procedures",
      icon: FolderClosed,
      roles: ["admin", "supervisor"],
    },
    {
      title: "Funciones",
      href: "/functions",
      icon: FunctionSquare,
      roles: ["admin", "supervisor", "designer", "editor"],
    },
    {
      title: "Configuración",
      href: "/settings",
      icon: Settings,
      roles: ["admin", "supervisor", "designer", "editor"],
    },
  ]

  // Filtrar elementos de navegación según el rol del usuario
  const filteredNavItems = navItems.filter((item) => item.roles.includes(userRole))

  return (
    <aside
      className={cn(
        "bg-[hsl(var(--sidebar-bg))] border-r transition-all duration-300 flex flex-col",
        collapsed ? "w-[70px]" : "w-[250px]",
      )}
    >
      <div className="h-[60px] flex items-center px-4 border-b">
        <CompanyLogo collapsed={collapsed} />
      </div>

      <nav className="flex-1 py-4 px-2">
        <TooltipProvider delayDuration={0}>
          {filteredNavItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 my-1 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-[hsl(var(--sidebar-active))] text-[#16502D]"
                        : "hover:bg-[hsl(var(--sidebar-hover))] text-muted-foreground hover:text-[#16502D]",
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", isActive ? "text-[#16502D]" : "")} />
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">{item.title}</TooltipContent>}
              </Tooltip>
            )
          })}
        </TooltipProvider>
      </nav>

      <div className="p-2 border-t">
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-center"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          {!collapsed && <span className="ml-2">Colapsar</span>}
        </Button>
      </div>
    </aside>
  )
}
