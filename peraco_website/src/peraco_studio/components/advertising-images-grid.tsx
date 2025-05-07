import { Clock, CheckCircle, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const advertisingImages = [
  {
    id: "IMG-001",
    title: "Banner de Oferta de Verano",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "pending",
    date: "2023-04-15",
  },
  {
    id: "IMG-002",
    title: "Exhibición de Nuevo Producto",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "approved",
    date: "2023-04-14",
  },
  {
    id: "IMG-003",
    title: "Especial de Vacaciones",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "pending",
    date: "2023-04-13",
  },
  {
    id: "IMG-004",
    title: "Promoción de Venta Relámpago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "rejected",
    date: "2023-04-12",
  },
  {
    id: "IMG-005",
    title: "Campaña de Temporada",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "pending",
    date: "2023-04-11",
  },
  {
    id: "IMG-006",
    title: "Recursos de Renovación de Marca",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "approved",
    date: "2023-04-10",
  },
]

export function AdvertisingImagesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {advertisingImages.map((image) => (
        <div key={image.id} className="overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
            <img src={image.thumbnail || "/placeholder.svg"} alt={image.title} className="h-full w-full object-cover" />
            <div className="absolute bottom-2 right-2">
              {image.status === "pending" && <Badge className="bg-yellow-100 text-yellow-800">Pendiente</Badge>}
              {image.status === "approved" && <Badge className="bg-green-100 text-green-800">Aprobado</Badge>}
              {image.status === "rejected" && <Badge className="bg-red-100 text-red-800">Rechazado</Badge>}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">{image.title}</h3>
            <p className="mt-1 text-sm text-gray-500">Añadido el {image.date}</p>

            {image.status === "pending" && (
              <div className="mt-4 flex space-x-2">
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
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
