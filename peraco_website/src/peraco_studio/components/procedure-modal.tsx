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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from "lucide-react"

interface ProcedureModalProps {
  isOpen: boolean
  onClose: () => void
  procedure: {
    name: string
    description: string
    params: string
  }
}

export function ProcedureModal({ isOpen, onClose, procedure }: ProcedureModalProps) {
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

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
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mostrar mensaje de éxito
      setSuccess(true)

      // Limpiar el formulario
      setFormValues({})

      // Cerrar el modal después de un tiempo
      setTimeout(() => {
        onClose()
        setSuccess(false)
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#16502D]">{procedure.name}</DialogTitle>
          <DialogDescription>{procedure.description}</DialogDescription>
        </DialogHeader>

        {success ? (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Procedimiento ejecutado</AlertTitle>
            <AlertDescription className="text-green-700">
              El procedimiento se ha ejecutado correctamente.
            </AlertDescription>
          </Alert>
        ) : (
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
                <p className="text-sm text-muted-foreground">Este procedimiento no requiere parámetros.</p>
              )}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Ejecutando..." : "Ejecutar"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
