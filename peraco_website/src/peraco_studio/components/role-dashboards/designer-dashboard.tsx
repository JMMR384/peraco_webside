import { Activity, FileImage } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdvertisingImagesGrid } from "@/components/advertising-images-grid"

export function DesignerDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="font-poppins text-3xl tracking-wide text-green-dark font-medium">PANEL DE DISEÑADOR</h1>
      <p className="font-jakarta text-muted-foreground font-medium">
        Publica imágenes, puede ver sus imágenes aprobadas o pendientes.
      </p>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        <Card className="border-l-4 border-l-[#9CC200]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Artículos de Noticias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-medium">342</div>
              <Activity className="h-8 w-8 text-green-light" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-medium">+8 publicados hoy</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#9CC200]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tus Imágenes Publicitarias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-medium">32</div>
              <FileImage className="h-8 w-8 text-green-light" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-medium">5 pendientes de aprobación</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-poppins text-xl text-green-dark font-medium">TUS IMÁGENES PUBLICITARIAS</CardTitle>
          <CardDescription className="font-medium">Tienes 5 imágenes pendientes de aprobación</CardDescription>
        </CardHeader>
        <CardContent>
          <AdvertisingImagesGrid />
        </CardContent>
      </Card>
    </div>
  )
}
