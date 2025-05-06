import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Eye } from "lucide-react"

export function RecentNewsTable() {
  // Datos de ejemplo
  const recentNews = [
    {
      id: 1,
      title: "Lanzamiento de nuevo producto",
      author: "Juan Pérez",
      date: "2023-04-15",
      status: "published",
      category: "Productos",
    },
    {
      id: 2,
      title: "Resultados financieros del Q1",
      author: "María López",
      date: "2023-04-12",
      status: "published",
      category: "Finanzas",
    },
    {
      id: 3,
      title: "Apertura de nueva sucursal",
      author: "Carlos Rodríguez",
      date: "2023-04-10",
      status: "published",
      category: "Expansión",
    },
    {
      id: 4,
      title: "Entrevista con el CEO",
      author: "Ana Martínez",
      date: "2023-04-08",
      status: "published",
      category: "Entrevistas",
    },
    {
      id: 5,
      title: "Participación en feria internacional",
      author: "Roberto Sánchez",
      date: "2023-04-05",
      status: "published",
      category: "Eventos",
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

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Título</TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead>Autor</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentNews.map((news) => (
          <TableRow key={news.id}>
            <TableCell className="font-medium">{news.title}</TableCell>
            <TableCell>{news.category}</TableCell>
            <TableCell>{news.author}</TableCell>
            <TableCell>{formatDate(news.date)}</TableCell>
            <TableCell>
              <Badge className="bg-[#1B8F31] hover:bg-[#16502D]">Publicado</Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">Ver</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Editar</span>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
