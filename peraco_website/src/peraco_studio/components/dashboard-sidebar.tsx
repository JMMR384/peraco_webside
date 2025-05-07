"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  FileImage,
  Home,
  Menu,
  MessageSquare,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { usePathname } from "next/navigation"
import { allActions } from "@/lib/actions"

type UserRole = "admin" | "supervisor" | "designer" | "editor"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  roles: UserRole[]
}

// Definición de categorías
interface Category {
  name: string
  displayName: string
  icon: React.ComponentType<{ className?: string }>
  actions: typeof allActions
}

const navItems: NavItem[] = [
  {
    title: "Panel Principal",
    href: "/",
    icon: Home,
    roles: ["admin", "supervisor", "designer", "editor"],
  },
  {
    title: "Noticias",
    href: "/news",
    icon: MessageSquare,
    roles: ["admin", "supervisor", "designer", "editor"],
  },
  {
    title: "Usuarios",
    href: "/users",
    icon: Users,
    roles: ["admin", "supervisor"],
  },
  {
    title: "Imágenes Publicitarias",
    href: "/advertising",
    icon: FileImage,
    roles: ["admin", "designer", "supervisor"],
  },
  {
    title: "Solicitudes de Aprobación",
    href: "/approvals",
    icon: ShieldCheck,
    roles: ["admin", "supervisor"],
  },
  {
    title: "Notificaciones",
    href: "/notifications",
    icon: Bell,
    roles: ["admin", "supervisor", "designer", "editor"],
  },
  {
    title: "Configuración",
    href: "/settings",
    icon: Settings,
    roles: ["admin"],
  },
]

// Organizar acciones por categorías sin duplicados
const categories: Category[] = [
  {
    name: "usuarios",
    displayName: "Usuarios",
    icon: Users,
    actions: allActions.filter(
      (action) =>
        (action.name.includes("usuario") ||
          action.name.includes("contraseña") ||
          action.name.includes("nombre_") ||
          action.name.includes("correo_")) &&
        !action.name.includes("noticia") &&
        !action.name.includes("imagen"),
    ),
  },
  {
    name: "noticias",
    displayName: "Noticias",
    icon: MessageSquare,
    actions: allActions.filter((action) => action.name.includes("noticia")),
  },
  {
    name: "imagenes",
    displayName: "Imágenes",
    icon: FileImage,
    actions: allActions.filter((action) => action.name.includes("imagen")),
  },
  {
    name: "permisos",
    displayName: "Permisos",
    icon: ShieldCheck,
    actions: allActions.filter(
      (action) =>
        (action.name.includes("rol") || action.name.includes("supervisor")) &&
        !action.name.includes("noticia") &&
        !action.name.includes("imagen"),
    ),
  },
]

interface DashboardSidebarProps {
  role: UserRole
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export function DashboardSidebar({ role, collapsed, setCollapsed }: DashboardSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [categoryStates, setCategoryStates] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map((cat) => [cat.name, true])),
  )

  const filteredNavItems = navItems.filter((item) => item.roles.includes(role))

  // Filtrar categorías que tienen acciones disponibles para el rol actual
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      actions: category.actions.filter((action) => action.roles.includes(role)),
    }))
    .filter((category) => category.actions.length > 0)

  const toggleCategory = (categoryName: string) => {
    setCategoryStates((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }))
  }

  const getRoleName = () => {
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

  const handleActionClick = (action: (typeof allActions)[0]) => {
    if (action.type === "procedure") {
      router.push(`/procedures/${action.name}`)
    } else {
      router.push(`/functions/${action.name}`)
    }
    setOpen(false)
  }

  return (
    <>
      {/* Mobile sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed left-4 top-4 z-40 lg:hidden">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0 bg-white">
          <div className="flex h-16 items-center border-b px-6">
            <span className="font-poppins text-lg text-[#16502D] font-medium">PORTAL DE ADMINISTRACIÓN</span>
          </div>
          <div className="px-2 py-4 overflow-y-auto h-[calc(100vh-4rem)]">
            <div className="mb-4 px-4">
              <div className="rounded-lg bg-[#9CC200]/10 p-3">
                <div className="text-sm font-medium text-[#16502D]">{getRoleName()}</div>
              </div>
            </div>

            <nav className="space-y-1 mb-6">
              {filteredNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-sidebar-active text-green-dark font-medium"
                      : "text-gray-700 hover:bg-sidebar-hover hover:text-green-medium"
                  }`}
                >
                  <item.icon
                    className={`h-5 w-5 ${pathname === item.href ? "text-green-light" : "text-green-light"}`}
                  />
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="space-y-4">
              {filteredCategories.map((category) => (
                <Collapsible
                  key={category.name}
                  open={categoryStates[category.name]}
                  onOpenChange={() => toggleCategory(category.name)}
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#9CC200]/10 hover:text-[#1B8F31] transition-colors">
                    <div className="flex items-center gap-3">
                      <category.icon className="h-5 w-5 text-[#1B8F31]" />
                      <span>{category.displayName}</span>
                    </div>
                    <ChevronIcon open={categoryStates[category.name]} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 pr-2">
                    <div className="space-y-1 mt-1">
                      {category.actions.map((action) => (
                        <TooltipProvider key={action.name}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                onClick={() => handleActionClick(action)}
                                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[#9CC200]/10 hover:text-[#1B8F31] transition-colors"
                              >
                                <action.icon className="h-4 w-4 text-[#1B8F31]" />
                                <span className="truncate">{action.displayName}</span>
                                <span className="ml-auto text-xs text-gray-400">
                                  {action.type === "procedure" ? "Proc" : "Func"}
                                </span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                              <p className="font-medium">
                                {action.displayName}
                                {action.params}
                              </p>
                              <p className="text-xs">{action.description}</p>
                              <p className="text-xs text-gray-400 mt-1">
                                {action.type === "procedure" ? "Procedimiento" : "Función"}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div
        className={`hidden lg:block h-screen sticky top-0 shrink-0 border-r border-gray-200 bg-white overflow-y-auto transition-all duration-300 ease-in-out ${
          collapsed ? "w-20" : "w-72"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="border-b border-gray-200 px-6 py-3 flex items-center justify-between h-16">
            {!collapsed && (
              <div className="rounded-lg bg-[#9CC200]/10 p-3 flex-1">
                <div className="text-sm font-medium text-[#16502D]">{getRoleName()}</div>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
            >
              {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="space-y-2 p-4">
              {filteredNavItems.map((item) => (
                <TooltipProvider key={item.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center ${collapsed ? "justify-center" : "gap-3"} rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                          pathname === item.href
                            ? "bg-sidebar-active text-green-dark font-medium"
                            : "text-gray-700 hover:bg-sidebar-hover hover:text-green-medium"
                        }`}
                      >
                        <item.icon
                          className={`h-5 w-5 ${pathname === item.href ? "text-green-light" : "text-green-light"}`}
                        />
                        {!collapsed && <span>{item.title}</span>}
                      </Link>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right">
                        <p>{item.title}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ))}
            </nav>

            {!collapsed && (
              <div className="px-4 space-y-4">
                {filteredCategories.map((category) => (
                  <Collapsible
                    key={category.name}
                    open={categoryStates[category.name]}
                    onOpenChange={() => toggleCategory(category.name)}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-sidebar-hover hover:text-green-medium transition-colors">
                      <div className="flex items-center gap-3">
                        <category.icon className="h-5 w-5 text-green-light" />
                        <span>{category.displayName}</span>
                      </div>
                      <ChevronIcon open={categoryStates[category.name]} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 pr-2">
                      <div className="space-y-1 mt-1">
                        {category.actions.map((action) => (
                          <TooltipProvider key={action.name}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => handleActionClick(action)}
                                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-sidebar-hover hover:text-green-medium transition-colors"
                                >
                                  <action.icon className="h-4 w-4 text-green-light" />
                                  <span className="truncate">{action.displayName}</span>
                                  <span className="ml-auto text-xs text-gray-400">
                                    {action.type === "procedure" ? "Proc" : "Func"}
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="right">
                                <p className="font-medium">
                                  {action.displayName}
                                  {action.params}
                                </p>
                                <p className="text-xs">{action.description}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {action.type === "procedure" ? "Procedimiento" : "Función"}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// Componente auxiliar para el icono de chevron
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
}
