"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, ImageIcon, Loader2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface NewsEditorModalProps {
  isOpen: boolean
  onClose: () => void
  initialData?: {
    title: string
    summary: string
    content: string
    imageUrl: string
  }
}

export function NewsEditorModal({ isOpen, onClose, initialData }: NewsEditorModalProps) {
  const [title, setTitle] = useState(initialData?.title || "")
  const [summary, setSummary] = useState(initialData?.summary || "")
  const [content, setContent] = useState(initialData?.content || "")
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "")
  const [previewUrl, setPreviewUrl] = useState(initialData?.imageUrl || "")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState("editor")

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

      // Cerrar el modal después de un tiempo
      setTimeout(() => {
        onClose()
        // Resetear el estado
        setTitle("")
        setSummary("")
        setContent("")
        setImageUrl("")
        setPreviewUrl("")
        setSuccess(false)
      }, 2000)
    } catch (error) {
      console.error("Error al guardar la noticia:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#16502D] text-xl">Editor de Noticias</DialogTitle>
          <DialogDescription>
            Redacta un nuevo artículo de noticias. Completa todos los campos y envíalo para su aprobación.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Artículo guardado</AlertTitle>
            <AlertDescription className="text-green-700">
              Tu artículo ha sido guardado y enviado para aprobación.
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            <Tabs defaultValue="editor" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="preview">Vista previa</TabsTrigger>
              </TabsList>
              <TabsContent value="editor" className="space-y-4">
                <div className="grid gap-4">
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
                      className="min-h-[200px]"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="image">Imagen</Label>
                    <div className="flex items-center gap-4">
                      <Input id="image" type="file" accept="image/*" onChange={handleImageChange} className="flex-1" />
                      {previewUrl && (
                        <div className="h-16 w-16 overflow-hidden rounded-md border">
                          <img
                            src={previewUrl || "/placeholder.svg"}
                            alt="Preview"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="preview">
                <div className="rounded-md border p-4">
                  {!title && !summary && !content && !previewUrl ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                      <ImageIcon className="mb-2 h-12 w-12 opacity-20" />
                      <h3 className="text-lg font-medium">Vista previa no disponible</h3>
                      <p className="max-w-md">
                        Completa los campos en la pestaña Editor para ver una vista previa de tu artículo.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h1 className="text-2xl font-bold text-[#16502D]">{title || "Sin título"}</h1>

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
                </div>
              </TabsContent>
            </Tabs>

            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
                Cancelar
              </Button>
              <Button type="submit" disabled={loading} className="bg-[#1B8F31] hover:bg-[#16502D]">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
                  </>
                ) : (
                  "Guardar y enviar"
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
