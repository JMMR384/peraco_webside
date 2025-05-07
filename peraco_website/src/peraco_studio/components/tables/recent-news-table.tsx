import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const newsArticles = [
  {
    id: "NEWS-001",
    title: "Lanzamiento de Nuevo Producto",
    author: "Jane Smith",
    date: "2023-04-15",
    category: "Producto",
  },
  {
    id: "NEWS-002",
    title: "Resultados Financieros Trimestrales",
    author: "John Doe",
    date: "2023-04-14",
    category: "Finanzas",
  },
  {
    id: "NEWS-003",
    title: "Planes de Expansión de la Empresa",
    author: "Alex Johnson",
    date: "2023-04-13",
    category: "Corporativo",
  },
  {
    id: "NEWS-004",
    title: "Premio de la Industria",
    author: "Sarah Williams",
    date: "2023-04-12",
    category: "Logro",
  },
  {
    id: "NEWS-005",
    title: "Anuncio de Nueva Asociación",
    author: "Mike Brown",
    date: "2023-04-11",
    category: "Asociación",
  },
]

export function RecentNewsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Título</TableHead>
          <TableHead>Autor</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Categoría</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {newsArticles.map((article) => (
          <TableRow key={article.id}>
            <TableCell className="font-medium">{article.title}</TableCell>
            <TableCell>{article.author}</TableCell>
            <TableCell>{article.date}</TableCell>
            <TableCell>
              <Badge variant="outline" className="bg-[#9CC200]/10 text-[#16502D] hover:bg-[#9CC200]/20">
                {article.category}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
