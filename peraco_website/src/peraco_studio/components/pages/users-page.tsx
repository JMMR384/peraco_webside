"use client"

import { useState } from "react"
import { Search, Filter, MoreHorizontal, UserPlus, UserCheck, UserX } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DashboardShell } from "@/components/dashboard-shell"

const users = [
  {
    id: "USR-001",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    role: "admin",
    status: "active",
    lastLogin: "2023-04-15 10:30",
  },
  {
    id: "USR-002",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    role: "supervisor",
    status: "active",
    lastLogin: "2023-04-14 15:45",
  },
  {
    id: "USR-003",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    role: "designer",
    status: "active",
    lastLogin: "2023-04-13 09:15",
  },
  {
    id: "USR-004",
    name: "William Kim",
    email: "will@email.com",
    role: "editor",
    status: "inactive",
    lastLogin: "2023-04-10 14:20",
  },
  {
    id: "USR-005",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    role: "editor",
    status: "pending",
    lastLogin: "N/A",
  },
  {
    id: "USR-006",
    name: "Lucas Rodriguez",
    email: "lucas.rodriguez@email.com",
    role: "designer",
    status: "active",
    lastLogin: "2023-04-12 11:05",
  },
  {
    id: "USR-007",
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    role: "supervisor",
    status: "active",
    lastLogin: "2023-04-11 16:30",
  },
  {
    id: "USR-008",
    name: "Noah Garcia",
    email: "noah.garcia@email.com",
    role: "editor",
    status: "inactive",
    lastLogin: "2023-04-05 09:45",
  },
]

export function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getRoleLabel = (role: string) => {
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

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-[#16502D]/10 text-[#16502D]"
      case "supervisor":
        return "bg-[#1B8F31]/10 text-[#1B8F31]"
      case "designer":
        return "bg-[#9CC200]/10 text-[#16502D]"
      case "editor":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Activo"
      case "inactive":
        return "Inactivo"
      case "pending":
        return "Pendiente"
      default:
        return status
    }
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-anton text-3xl tracking-wide text-[#16502D]">GESTIÓN DE USUARIOS</h1>
            <p className="text-muted-foreground">Administra los usuarios y sus permisos en la plataforma.</p>
          </div>
          <Button className="bg-[#1B8F31] hover:bg-[#16502D]">
            <UserPlus className="mr-2 h-4 w-4" /> Nuevo Usuario
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar usuarios..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filtrar</span>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Usuarios del Sistema</CardTitle>
            <CardDescription>
              Total: {filteredUsers.length} usuario{filteredUsers.length !== 1 ? "s" : ""}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuario</TableHead>
                  <TableHead>Rol</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Último Acceso</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getRoleBadgeColor(user.role)}>
                        {getRoleLabel(user.role)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusBadgeColor(user.status)}>
                        {getStatusLabel(user.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Abrir menú</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <UserCheck className="mr-2 h-4 w-4" /> Editar usuario
                          </DropdownMenuItem>
                          <DropdownMenuItem>Cambiar rol</DropdownMenuItem>
                          <DropdownMenuItem>Restablecer contraseña</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <UserX className="mr-2 h-4 w-4" /> Desactivar usuario
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}
