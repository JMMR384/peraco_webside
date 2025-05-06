import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Eye } from "lucide-react"

export function ApprovalRequestsTable() {
  // Datos de ejemplo
  const approvalRequests = [
    {
      id: 1,
      title: "Nueva campaña de marketing",
      type: "Noticia",
      requestedBy: "Ana Martínez",
      date: "2023-04-15",
      priority: "high",
    },
    {
      id: 2,
      title: "Banner promocional de verano",
      type: "Imagen",
      requestedBy: "Carlos Rodríguez",
      date: "2023-04-14",
      priority: "medium",
    },
    {
      id: 3,
      title: "Actualización de política de privacidad",
      type: "Noticia",
      requestedBy: "María López",
      date: "2023-04-13",
      priority: "low",
    },
    {
      id: 4,
      title: "Imagen para redes sociales",
      type: "Imagen",
      requestedBy: "Roberto Sánchez",
      date: "2023-04-12",
      priority: "medium",
    },
    {
      id: 5,
      title: "Comunicado de prensa",
      type: "Noticia",
      requestedBy: "Juan Pérez",
      date: "2023-04-11",
      priority: "high",
    },
  ]

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date)
  }

  // Función para obtener el color de la prioridad
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500 hover:bg-red-600">Alta</Badge>
      case "medium":
        return <Badge className="bg-orange-500 hover:bg-orange-600">Media</Badge>
      case "low":
        return <Badge className="bg-[#1B8F31] hover:bg-[#16502D]">Baja</Badge>
      default:
        return <Badge>Normal</Badge>
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Título</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Solicitante</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Prioridad</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {approvalRequests.map((request) => (
          <TableRow key={request.id}>
            <TableCell className="font-medium">{request.title}</TableCell>
            <TableCell>
              <Badge variant="outline" className="border-[#9CC200] text-[#16502D]">
                {request.type}
              </Badge>
            </TableCell>
            <TableCell>{request.requestedBy}</TableCell>
            <TableCell>{formatDate(request.date)}</TableCell>
            <TableCell>{getPriorityBadge(request.priority)}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">Ver</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-[#1B8F31]">
                  <CheckCircle className="h-4 w-4" />
                  <span className="sr-only">Aprobar</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-red-500">
                  <XCircle className="h-4 w-4" />
                  <span className="sr-only">Rechazar</span>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
