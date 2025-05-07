"use client"

import { useState } from "react"
import { Search, Filter, MoreHorizontal, Upload, CheckCircle, XCircle, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DashboardShell } from "@/components/dashboard-shell"

const advertisingImages = [
  {
    id: "IMG-001",
    title: "Banner de Oferta de Verano",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "approved",
    date: "2023-04-15",
    author: "Jane Smith",
    category: "Banner",
  },
  {
    id: "IMG-002",
    title: "Exhibición de Nuevo Producto",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "approved",
    date: "2023-04-14",
    author: "John Doe",
    category: "Producto",
  },
  {
    id: "IMG-003",
    title: "Especial de Vacaciones",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "pending",
    date: "2023-04-13",
    author: "Alex Johnson",
    category: "Promoción",
  },
  {
    id: "IMG-004",
    title: "Promoción de Venta Relámpago",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "rejected",
    date: "2023-04-12",
    author: "Sarah Williams",
    category: "Promoción",
  },
  {
    id: "IMG-005",
    title: "Campaña de Temporada",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "pending",
    date: "2023-04-11",
    author: "Mike Brown",
    category: "Campaña",
  },
  {
    id: "IMG-006",
    title: "Recursos de Renovación de Marca",
    thumbnail: "/placeholder.svg?height=200&width=300",
    status: "approved",
    date: "2023-04-10",
    author: "Emily Davis",
    category: "Marca",
  },
]

export function AdvertisingPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredImages = (status: string) => {
    return advertisingImages.filter(
      (image) =>
        image.status === status &&
        (searchTerm === "" ||
          image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.category.toLowerCase().includes(searchTerm.toLowerCase())),
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Aprobado</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pendiente</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rechazado</Badge>
      default:
        return null
    }
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-anton text-3xl tracking-wide text-[#16502D]">IMÁGENES PUBLICITARIAS</h1>
            <p className="text-muted-foreground">Gestiona las imágenes publicitarias de la plataforma.</p>
          </div>
          <Button className="bg-[#1B8F31] hover:bg-[#16502D]">
            <Upload className="mr-2 h-4 w-4" /> Subir Imagen
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar imágenes..."
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

        <Tabs defaultValue="approved">
          <TabsList>
            <TabsTrigger value="approved">Aprobadas</TabsTrigger>
            <TabsTrigger value="pending">Pendientes</TabsTrigger>
            <TabsTrigger value="rejected">Rechazadas</TabsTrigger>
          </TabsList>
          <TabsContent value="approved" className="mt-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredImages("approved").map((image) => (
                <Card key={image.id} className="overflow-hidden">
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <img
                      src={image.thumbnail || "/placeholder.svg"}
                      alt={image.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2">{getStatusBadge(image.status)}</div>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">{image.title}</h3>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Abrir menú</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                          <DropdownMenuItem>Descargar</DropdownMenuItem>
                          <DropdownMenuItem>Editar información</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                      <p>Categoría: {image.category}</p>
                      <p>Autor: {image.author}</p>
                      <p>Fecha: {image.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pending" className="mt-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredImages("pending").map((image) => (
                <Card key={image.id} className="overflow-hidden">
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <img
                      src={image.thumbnail || "/placeholder.svg"}
                      alt={image.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2">{getStatusBadge(image.status)}</div>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">{image.title}</h3>
                      <div className="flex space-x-1">
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
                    </div>
                    <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                      <p>Categoría: {image.category}</p>
                      <p>Autor: {image.author}</p>
                      <p>Fecha: {image.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="rejected" className="mt-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredImages("rejected").map((image) => (
                <Card key={image.id} className="overflow-hidden">
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <img
                      src={image.thumbnail || "/placeholder.svg"}
                      alt={image.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2">{getStatusBadge(image.status)}</div>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">{image.title}</h3>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Abrir menú</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                          <DropdownMenuItem>Editar y reenviar</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                      <p>Categoría: {image.category}</p>
                      <p>Autor: {image.author}</p>
                      <p>Fecha: {image.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
