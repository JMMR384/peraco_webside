"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type UserRole = "admin" | "supervisor" | "designer" | "editor"

interface UserNavProps {
  role: UserRole
}

export function UserNav({ role }: UserNavProps) {
  const getRoleColor = () => {
    switch (role) {
      case "admin":
        return "bg-[#16502D] text-white"
      case "supervisor":
        return "bg-[#1B8F31] text-white"
      case "designer":
        return "bg-[#9CC200] text-[#16502D]"
      case "editor":
        return "bg-gray-200 text-gray-700"
      default:
        return "bg-gray-200 text-gray-700"
    }
  }

  const getRoleLabel = () => {
    switch (role) {
      case "admin":
        return "Administrador"
      case "supervisor":
        return "Supervisor"
      case "designer":
        return "Diseñador"
      case "editor":
        return "Usuario"
      default:
        return role
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 border-2 border-[#9CC200]">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback className={getRoleColor()}>{role.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">{getRoleLabel()}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Configuración</DropdownMenuItem>
          <DropdownMenuItem>Notificaciones</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500">Cerrar sesión</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
