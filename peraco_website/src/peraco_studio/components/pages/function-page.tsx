"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardShell } from "@/components/dashboard-shell"

// Importamos las acciones para encontrar la función por nombre
import { allActions } from "@/lib/actions"

interface FunctionPageProps {
  functionName: string
}

export function FunctionPage({ functionName }: FunctionPageProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)

  // Buscar la función por nombre
  const func = allActions.find((action) => action.name === functionName && action.type === "function")

  // Si no se encuentra la función, redirigir a la página principal
  useEffect(() => {
    if (!func) {
      router.push("/")
    }
  }, [func, router])

  if (!func) {
    return null
  }

  // Extraer los parámetros del string de parámetros
  const extractParams = (paramsString: string) => {
    // Eliminar paréntesis y dividir por comas
    const cleanParams = paramsString.replace(/^$$|$$$/g, "").split(",")
    return cleanParams.map((param) => param.trim()).filter((p) => p)
  }

  const params = extractParams(func.params)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    try {
      // Aquí se implementaría la lógica para ejecutar la función
      console.log(`Ejecutando ${func.name} con parámetros:`, formValues)

      // Simular una operación asíncrona
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simular un resultado
      const mockResults: Record<string, string> = {
        nombre_usuario: "John Doe",
        correo_usuario: "john.doe@email.com",
        total_noticias_por_usuario: "24",
        imagen_autorizada: "Sí",
        imagenes_pendientes: "5 imágenes pendientes",
        noticia_autorizada: "Sí",
        noticias_pendientes: "8 noticias pendientes",
        obtener_rol: "Administrador",
        verificar_supervisor: "Sí",
        imagenes_autorizadas_por: "12 imágenes autorizadas",
        noticias_autorizadas_por: "15 noticias autorizadas",
      }

      setResult(mockResults[func.name] || "Resultado de la función")
    } catch (error) {
      console.error("Error al ejecutar la función:", error)
      setResult("Error al ejecutar la función")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (param: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [param]: value,
    }))
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Button>
          <div>
            <h1 className="font-poppins text-3xl tracking-wide text-green-dark">EJECUTAR FUNCIÓN</h1>
            <p className="font-jakarta text-muted-foreground">{func.description}</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{func.displayName}</CardTitle>
            <CardDescription>
              Nombre de la función: <code className="bg-muted px-1 py-0.5 rounded">{func.name}</code>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} id="function-form">
              <div className="space-y-4">
                {params.length > 0 ? (
                  params.map((param, index) => (
                    <div key={index} className="grid gap-2">
                      <Label htmlFor={param}>{param.replace("p_", "")}</Label>
                      <Input
                        id={param}
                        value={formValues[param] || ""}
                        onChange={(e) => handleInputChange(param, e.target.value)}
                        placeholder={`Ingrese ${param.replace("p_", "")}`}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">Esta función no requiere parámetros.</p>
                )}

                {result && (
                  <div className="mt-6">
                    <Label>Resultado:</Label>
                    <div className="mt-2 rounded-md bg-muted p-4">
                      <p className="font-medium">{result}</p>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              Cancelar
            </Button>
            <Button type="submit" form="function-form" disabled={loading} className="bg-[#1B8F31] hover:bg-[#16502D]">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Ejecutando...
                </>
              ) : (
                "Ejecutar"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardShell>
  )
}
