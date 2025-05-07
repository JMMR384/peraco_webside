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
import { Card, CardContent } from "@/components/ui/card"

interface FunctionModalProps {
  isOpen: boolean
  onClose: () => void
  func: {
    name: string
    description: string
    params: string
  }
}

export function FunctionModal({ isOpen, onClose, func }: FunctionModalProps) {
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)

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
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simular un resultado
      const mockResults: Record<string, string> = {
        "Obtener nombre": "John Doe",
        "Obtener correo": "john.doe@email.com",
        "Total noticias por usuario": "24",
        "Verificar imagen autorizada": "Sí",
        "Imágenes pendientes": "5 imágenes pendientes",
        "Verificar noticia autorizada": "Sí",
        "Noticias pendientes": "8 noticias pendientes",
        "Obtener rol": "Administrador",
        "Verificar supervisor": "Sí",
        "Imágenes autorizadas por supervisor": "12 imágenes autorizadas",
        "Noticias autorizadas por supervisor": "15 noticias autorizadas",
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#16502D]">{func.name}</DialogTitle>
          <DialogDescription>{func.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {params.length > 0 ? (
              params.map((param, index) => (
                <div key={index} className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={param} className="text-right">
                    {param.replace("p_", "")}
                  </Label>
                  <Input
                    id={param}
                    value={formValues[param] || ""}
                    onChange={(e) => handleInputChange(param, e.target.value)}
                    className="col-span-3"
                    placeholder={`Ingrese ${param.replace("p_", "")}`}
                  />
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Esta función no requiere parámetros.</p>
            )}

            {result && (
              <Card className="mt-4">
                <CardContent className="p-4">
                  <h4 className="mb-2 font-medium text-[#16502D]">Resultado:</h4>
                  <p className="text-sm">{result}</p>
                </CardContent>
              </Card>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cerrar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Ejecutando..." : "Ejecutar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
