"use client"

import { useState } from "react"
import { Search, Filter, CheckCircle, XCircle, Clock, FileText, FileImage } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardShell } from "@/components/dashboard-shell"

const approvalRequests = [
  {
    id: "REQ-001",
    title: "Actualización de Banner Principal",
    type: "image",
    requestedBy: "Jane Smith",
    date: "2023-04-15",
    status: "pending",
    priority: "high",
  },
  {
    id: "REQ-002",
    title: "Anuncio de Nuevo Producto",
    type: "news",
    requestedBy: "John Doe",
    date: "2023-04-14",
    status: "pending",
    priority: "medium",
  },
  {
    id: "REQ-003",
    title: "Imágenes de Campaña de Verano",
    type: "image",
    requestedBy: "Alex Johnson",
    date: "2023-04-13",
    status: "pending",
    priority: "low",
  },
  {
    id: "REQ-004",
    title: "Cambio de Rol de Usuario",
    type: "user",
    requestedBy: "Sarah Williams",
    date: "2023-04-12",
    status: "pending",
    priority: "high",
  },
  {
    id: "REQ-005",
    title: "Anuncio de Evento",
    type: "news",
    requestedBy: "Mike Brown",
    date: "2023-04-11",
    status: "pending",
    priority: "medium",
  },
  {
    id: "REQ-006",
    title: "Actualización de Política de Privacidad",
    type: "news",
    requestedBy: "Emily Davis",
    date: "2023-04-10",
    status: "pending",
    priority: "low",
  },
]

export function ApprovalsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRequests = approvalRequests.filter(
    (request) =>
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.requestedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "news":
        return <FileText className="h-4 w-4 text-[#1B8F31]" />
      case "image":
        return <FileImage className="h-4 w-4 text-[#1B8F31]" />
      default:
        return null
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "news":
        return "Artículo de Noticias"
      case "image":
        return "Imagen Publicitaria"
      case "user":
        return "Permiso de Usuario"
      default:
        return type
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800">Alta</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Media</Badge>
      case "low":
        return <Badge className="bg-blue-100 text-blue-800">Baja</Badge>
      default:
        return null
    }
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-anton text-3xl tracking-wide text-[#16502D]">SOLICITUDES DE APROBACIÓN</h1>
            <p className="text-muted-foreground">Gestiona las solicitudes de aprobación pendientes.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar solicitudes..."
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
            <CardTitle>Solicitudes Pendientes</CardTitle>
            <CardDescription>
              Total: {filteredRequests.length} solicitud{filteredRequests.length !== 1 ? "es" : ""}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Solicitado Por</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Prioridad</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.title}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTypeIcon(request.type)}
                        <span>{getTypeLabel(request.type)}</span>
                      </div>
                    </TableCell>
                    <TableCell>{request.requestedBy}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span className="sr-only">Aprobar</span>
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-600">
                          <XCircle className="h-4 w-4" />
                          <span className="sr-only">Rechazar</span>
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Clock className="h-4 w-4" />
                          <span className="sr-only">Posponer</span>
                        </Button>
                      </div>
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
