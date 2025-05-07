import { CheckCircle, Clock, XCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const approvalRequests = [
  {
    id: "REQ-001",
    title: "Actualización de Banner Principal",
    type: "Imagen Publicitaria",
    requestedBy: "Jane Smith",
    date: "2023-04-15",
    status: "pending",
  },
  {
    id: "REQ-002",
    title: "Anuncio de Nuevo Producto",
    type: "Artículo de Noticias",
    requestedBy: "John Doe",
    date: "2023-04-14",
    status: "pending",
  },
  {
    id: "REQ-003",
    title: "Imágenes de Campaña de Verano",
    type: "Imagen Publicitaria",
    requestedBy: "Alex Johnson",
    date: "2023-04-13",
    status: "pending",
  },
  {
    id: "REQ-004",
    title: "Cambio de Rol de Usuario",
    type: "Permiso de Usuario",
    requestedBy: "Sarah Williams",
    date: "2023-04-12",
    status: "pending",
  },
  {
    id: "REQ-005",
    title: "Anuncio de Evento",
    type: "Artículo de Noticias",
    requestedBy: "Mike Brown",
    date: "2023-04-11",
    status: "pending",
  },
]

export function ApprovalRequestsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Solicitado Por</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {approvalRequests.map((request) => (
          <TableRow key={request.id}>
            <TableCell className="font-medium">{request.id}</TableCell>
            <TableCell>{request.title}</TableCell>
            <TableCell>{request.type}</TableCell>
            <TableCell>{request.requestedBy}</TableCell>
            <TableCell>{request.date}</TableCell>
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
  )
}
