"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FileText, Plus, Filter, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardShell } from "@/components/dashboard-shell"

const newsArticles = [
  {
    id: "NEWS-001",
    title: "Lanzamiento de Nuevo Producto",
    author: "Jane Smith",
    date: "2023-04-15",
    category: "Producto",
    status: "published",
    image: "/placeholder.svg?height=200&width=300",
    summary: "Descubre nuestro nuevo producto revolucionario que cambiará la industria.",
  },
  {
    id: "NEWS-002",
    title: "Resultados Financieros Trimestrales",
    author: "John Doe",
    date: "2023-04-14",
    category: "Finanzas",
    status: "published",
    image: "/placeholder.svg?height=200&width=300",
    summary: "Análisis detallado de los resultados financieros del último trimestre.",
  },
  {
    id: "NEWS-003",
    title: "Planes de Expansión de la Empresa",
    author: "Alex Johnson",
    date: "2023-04-13",
    category: "Corporativo",
    status: "pending",
    image: "/placeholder.svg?height=200&width=300",
    summary: "Conoce nuestros ambiciosos planes de expansión para los próximos años.",
  },
  {
    id: "NEWS-004",
    title: "Premio de la Industria",
    author: "Sarah Williams",
    date: "2023-04-12",
    category: "Logro",
    status: "pending",
    image: "/placeholder.svg?height=200&width=300",
    summary: "Nuestra empresa ha sido reconocida con un prestigioso premio de la industria.",
  },
  {
    id: "NEWS-005",
    title: "Anuncio de Nueva Asociación",
    author: "Mike Brown",
    date: "2023-04-11",
    category: "Asociación",
    status: "draft",
    image: "/placeholder.svg?height=200&width=300",
    summary: "Hemos establecido una nueva asociación estratégica con una empresa líder.",
  },
  {
    id: "NEWS-006",
    title: "Actualización de Política de Privacidad",
    author: "Emily Davis",
    date: "2023-04-10",
    category: "Legal",
    status: "draft",
    image: "/placeholder.svg?height=200&width=300",
    summary: "Cambios importantes en nuestra política de privacidad que debes conocer.",
  },
]

export function NewsPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNews = (status: string) => {
    return newsArticles
      .filter(
        (article) =>
          article.status === status &&
          (searchTerm === "" ||
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.category.toLowerCase().includes(searchTerm.toLowerCase())),
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  const handleEditArticle = (article: any) => {
    // Redirigir al editor con el ID del artículo
    router.push(`/news/editor?id=${article.id}`)
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-poppins text-3xl tracking-wide text-green-dark font-medium">GESTIÓN DE NOTICIAS</h1>
            <p className="font-jakarta text-muted-foreground font-medium">
              Administra todos los artículos de noticias de la plataforma.
            </p>
          </div>
          <Button onClick={() => router.push("/news/editor")} className="bg-[#1B8F31] hover:bg-[#16502D]">
            <Plus className="mr-2 h-4 w-4" /> Nueva Noticia
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar artículos..."
              className="pl-8 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filtrar</span>
          </Button>
        </div>

        <Tabs defaultValue="published">
          <TabsList>
            <TabsTrigger value="published" className="font-medium">
              Publicados
            </TabsTrigger>
            <TabsTrigger value="pending" className="font-medium">
              Pendientes
            </TabsTrigger>
            <TabsTrigger value="draft" className="font-medium">
              Borradores
            </TabsTrigger>
          </TabsList>
          <TabsContent value="published" className="mt-4">
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredNews("published").map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-green-100 text-green-800 font-medium">
                        Publicado
                      </Badge>
                      <span className="text-xs text-muted-foreground font-medium">{article.date}</span>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg font-medium">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2 font-medium">{article.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-medium">Por {article.author}</span>
                      <Button variant="ghost" size="sm" onClick={() => handleEditArticle(article)}>
                        <FileText className="mr-2 h-4 w-4" /> Editar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pending" className="mt-4">
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredNews("pending").map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 font-medium">
                        Pendiente
                      </Badge>
                      <span className="text-xs text-muted-foreground font-medium">{article.date}</span>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg font-medium">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2 font-medium">{article.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-medium">Por {article.author}</span>
                      <Button variant="ghost" size="sm" onClick={() => handleEditArticle(article)}>
                        <FileText className="mr-2 h-4 w-4" /> Editar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="draft" className="mt-4">
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredNews("draft").map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-gray-100 text-gray-800 font-medium">
                        Borrador
                      </Badge>
                      <span className="text-xs text-muted-foreground font-medium">{article.date}</span>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg font-medium">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-2 font-medium">{article.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-medium">Por {article.author}</span>
                      <Button variant="ghost" size="sm" onClick={() => handleEditArticle(article)}>
                        <FileText className="mr-2 h-4 w-4" /> Editar
                      </Button>
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
