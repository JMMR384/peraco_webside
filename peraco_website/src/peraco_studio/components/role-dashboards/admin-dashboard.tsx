import { Activity, FileImage, ShieldCheck, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ApprovalRequestsTable } from "@/components/tables/approval-requests-table"
import { RecentNewsTable } from "@/components/tables/recent-news-table"

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h1 className="font-poppins text-3xl tracking-wide text-green-dark font-medium">PANEL DE ADMINISTRADOR</h1>
        <p className="font-jakarta text-muted-foreground font-medium">
          Gestión total del sistema, usuarios, contenido, y permisos.
        </p>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-[#9CC200]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total de Usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-medium">1,248</div>
              <Users className="h-8 w-8 text-green-light" />
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-medium">+12 nuevos usuarios esta semana</p>
          </CardContent>
        </Card>

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

      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-poppins text-xl text-green-dark font-medium">
              SOLICITUDES DE APROBACIÓN RECIENTES
            </CardTitle>
            <CardDescription className="font-medium">Tienes 24 solicitudes de aprobación pendientes</CardDescription>
          </CardHeader>
          <CardContent>
            <ApprovalRequestsTable />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-poppins text-xl text-green-dark font-medium">ÚLTIMAS NOTICIAS</CardTitle>
            <CardDescription className="font-medium">8 artículos publicados hoy</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentNewsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
