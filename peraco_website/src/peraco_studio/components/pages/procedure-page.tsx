"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, Loader2, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardShell } from "@/components/dashboard-shell"

// Importamos las acciones para encontrar el procedimiento por nombre
import { allActions } from "@/lib/actions"

interface ProcedurePageProps {
  procedureName: string
}

export function ProcedurePage({ procedureName }: ProcedurePageProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  // Buscar el procedimiento por nombre
  const procedure = allActions.find((action) => action.name === procedureName && action.type === "procedure")

  // Si no se encuentra el procedimiento, redirigir a la página principal
  useEffect(() => {
    if (!procedure) {
      router.push("/")
    }
  }, [procedure, router])

  if (!procedure) {
    return null
  }

  // Extraer los parámetros del string de parámetros
  const extractParams = (paramsString: string) => {
    // Eliminar paréntesis y dividir por comas
    const cleanParams = paramsString.replace(/^$$|$$$/g, "").split(",")
    return cleanParams.map((param) => param.trim()).filter((p) => p)
  }

  const params = extractParams(procedure.params)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    try {
      // Aquí se implementaría la lógica para ejecutar el procedimiento
      console.log(`Ejecutando ${procedure.name} con parámetros:`, formValues)

      // Simular una operación asíncrona
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mostrar mensaje de éxito
      setSuccess(true)

      // Limpiar el formulario después de un tiempo
      setTimeout(() => {
        setFormValues({})
      }, 2000)
    } catch (error) {
      console.error("Error al ejecutar el procedimiento:", error)
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
            <h1 className="font-poppins text-3xl tracking-wide text-green-dark">EJECUTAR PROCEDIMIENTO</h1>
            <p className="font-jakarta text-muted-foreground">{procedure.description}</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{procedure.displayName}</CardTitle>
            <CardDescription>
              Nombre del procedimiento: <code className="bg-muted px-1 py-0.5 rounded">{procedure.name}</code>
            </CardDescription>
          </CardHeader>
          <CardContent>
            {success ? (
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800">Procedimiento ejecutado</AlertTitle>
                <AlertDescription className="text-green-700">
                  El procedimiento se ha ejecutado correctamente.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} id="procedure-form">
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
                    <p className="text-sm text-muted-foreground">Este procedimiento no requiere parámetros.</p>
                  )}
                </div>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              Cancelar
            </Button>
            <Button
              type="submit"
              form="procedure-form"
              disabled={loading || success}
              className="bg-[#1B8F31] hover:bg-[#16502D]"
            >
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
