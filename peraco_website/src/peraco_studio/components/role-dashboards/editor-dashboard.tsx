"use client"

import { Activity, Edit, FileImage, FileText, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RecentNewsTable } from "@/components/tables/recent-news-table"
import { useRouter } from "next/navigation"

export function EditorDashboard() {
  const router = useRouter()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-poppins text-3xl tracking-wide text-green-dark font-medium">PANEL DE EDITOR</h1>
          <p className="font-jakarta text-muted-foreground font-medium">
            Redacta y gestiona artículos de noticias para su publicación.
          </p>
        </div>
        <Button onClick={() => router.push("/news/editor")} className="bg-[#1B8F31] hover:bg-[#16502D]">
          <Plus className="mr-2 h-4 w-4" /> Nueva Noticia
        </Button>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        <Card className="border-l-4 border-l-[#9CC200]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tus Artículos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-medium">12</div>
              <FileText className="h-8 w-8 text-green-light" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-medium">3 publicados esta semana</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#9CC200]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pendientes de Aprobación</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-medium">4</div>
              <Activity className="h-8 w-8 text-green-light" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-medium">2 enviados hoy</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#9CC200]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Imágenes Utilizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-medium">27</div>
              <FileImage className="h-8 w-8 text-green-light" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-medium">5 nuevas esta semana</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="font-poppins text-xl text-green-dark font-medium">
                TUS ARTÍCULOS RECIENTES
              </CardTitle>
              <CardDescription className="font-medium">Últimos artículos creados o editados</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => router.push("/news/editor")}>
              <Edit className="mr-2 h-4 w-4" /> Redactar
            </Button>
          </CardHeader>
          <CardContent>
            <RecentNewsTable />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-poppins text-xl text-green-dark font-medium">ARTÍCULOS PENDIENTES</CardTitle>
            <CardDescription className="font-medium">Artículos esperando aprobación</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-4 border-b pb-4 last:border-0">
                  <div className="h-16 w-24 overflow-hidden rounded-md bg-gray-100">
                    <img
                      src={`/placeholder.svg?height=64&width=96`}
                      alt="Thumbnail"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Título del Artículo Pendiente {i}</h4>
                    <p className="text-sm text-muted-foreground font-medium">
                      Enviado el {new Date().toLocaleDateString()}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        Pendiente
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
