import { Activity, FileImage, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ApprovalRequestsTable } from "@/components/tables/approval-requests-table"

export function SupervisorDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="font-poppins text-3xl tracking-wide text-green-dark font-medium">PANEL DE SUPERVISOR</h1>
      <p className="font-jakarta text-muted-foreground font-medium">
        Aprueba o rechaza noticias e imágenes, ve contenido pendiente, puede eliminar contenido.
      </p>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
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
            <CardTitle className="text-sm font-medium text-muted-foreground">Imágenes Publicitarias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-medium">87</div>
              <FileImage className="h-8 w-8 text-green-light" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-medium">12 pendientes de aprobación</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#9CC200]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Aprobaciones Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-medium">24</div>
              <ShieldCheck className="h-8 w-8 text-green-light" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-medium">5 requieren atención inmediata</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-poppins text-xl text-green-dark font-medium">SOLICITUDES DE APROBACIÓN</CardTitle>
          <CardDescription className="font-medium">Tienes 24 solicitudes de aprobación pendientes</CardDescription>
        </CardHeader>
        <CardContent>
          <ApprovalRequestsTable />
        </CardContent>
      </Card>
    </div>
  )
}
