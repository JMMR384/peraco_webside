"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, ImageIcon, Loader2, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { DashboardShell } from "@/components/dashboard-shell"

export function NewsEditorPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [content, setContent] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [previewUrl, setPreviewUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState("editor")

  // Simular carga de datos para edición (si fuera necesario)
  useEffect(() => {
    // Aquí se cargarían los datos si estuviéramos editando un artículo existente
    const searchParams = new URLSearchParams(window.location.search)
    const id = searchParams.get("id")

    if (id) {
      // Simulación de carga de datos
      // En un caso real, aquí se haría una petición a la API
      const mockArticle = {
        title: "Artículo de ejemplo",
        summary: "Este es un resumen de ejemplo para el artículo que estamos editando.",
        content: "Este es el contenido completo del artículo.\n\nPuede tener múltiples párrafos y secciones.",
        imageUrl: "/placeholder.svg?height=400&width=600",
      }

      setTitle(mockArticle.title)
      setSummary(mockArticle.summary)
      setContent(mockArticle.content)
      setImageUrl(mockArticle.imageUrl)
      setPreviewUrl(mockArticle.imageUrl)
    }
  }, [])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // En un entorno real, aquí subiríamos la imagen a un servidor
      // Para esta demo, simplemente creamos una URL temporal
      const url = URL.createObjectURL(file)
      setImageUrl(url)
      setPreviewUrl(url)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Aquí se implementaría la lógica para guardar la noticia
      console.log("Guardando noticia:", { title, summary, content, imageUrl })

      // Simular una operación asíncrona
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mostrar mensaje de éxito
      setSuccess(true)

      // Redirigir después de un tiempo
      setTimeout(() => {
        router.push("/news")
      }, 2000)
    } catch (error) {
      console.error("Error al guardar la noticia:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => router.push("/news")}>
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Volver</span>
            </Button>
            <div>
              <h1 className="font-poppins text-3xl tracking-wide text-green-dark">EDITOR DE NOTICIAS</h1>
              <p className="font-jakarta text-muted-foreground">
                Redacta un nuevo artículo de noticias o edita uno existente.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => router.push("/news")}>
              Cancelar
            </Button>
            <Button onClick={handleSubmit} disabled={loading || success} className="bg-[#1B8F31] hover:bg-[#16502D]">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
                </>
              ) : (
                "Guardar y publicar"
              )}
            </Button>
          </div>
        </div>

        {success ? (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Artículo guardado</AlertTitle>
            <AlertDescription className="text-green-700">
              Tu artículo ha sido guardado y enviado para aprobación.
            </AlertDescription>
          </Alert>
        ) : (
          <Tabs defaultValue="editor" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="editor">Editor</TabsTrigger>
              <TabsTrigger value="preview">Vista previa</TabsTrigger>
            </TabsList>
            <TabsContent value="editor" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Título</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Ingrese el título del artículo"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="summary">Resumen</Label>
                    <Textarea
                      id="summary"
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      placeholder="Ingrese un breve resumen del artículo"
                      required
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="content">Contenido</Label>
                    <Textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Ingrese el contenido completo del artículo"
                      required
                      className="min-h-[300px]"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="image">Imagen</Label>
                    <div className="flex flex-col gap-4">
                      <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
                      <div className="aspect-video w-full overflow-hidden rounded-md border bg-muted">
                        {previewUrl ? (
                          <img
                            src={previewUrl || "/placeholder.svg"}
                            alt="Vista previa"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label>Metadatos</Label>
                    <div className="rounded-md border p-4 space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="author">Autor</Label>
                        <Input id="author" defaultValue="John Doe" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="category">Categoría</Label>
                        <Input id="category" defaultValue="Noticias" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="tags">Etiquetas</Label>
                        <Input id="tags" placeholder="Separadas por comas" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="preview">
              <Card>
                <CardContent className="p-6">
                  {!title && !summary && !content && !previewUrl ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                      <ImageIcon className="mb-2 h-12 w-12 opacity-20" />
                      <h3 className="text-lg font-medium">Vista previa no disponible</h3>
                      <p className="max-w-md">
                        Completa los campos en la pestaña Editor para ver una vista previa de tu artículo.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <h1 className="text-3xl font-bold text-[#16502D]">{title || "Sin título"}</h1>

                      {previewUrl && (
                        <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-100">
                          <img
                            src={previewUrl || "/placeholder.svg"}
                            alt={title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}

                      <div className="rounded-md bg-[#9CC200]/10 p-4 text-[#16502D]">
                        <p className="font-medium">{summary || "Sin resumen"}</p>
                      </div>

                      <div className="prose max-w-none">
                        {content.split("\n").map((paragraph, i) => (
                          <p key={i}>{paragraph || "Sin contenido"}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </DashboardShell>
  )
}
