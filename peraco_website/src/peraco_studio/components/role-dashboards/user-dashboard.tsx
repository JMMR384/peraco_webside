import { Activity, User, Mail, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RecentNewsTable } from "@/components/tables/recent-news-table"

export function UserDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="font-anton text-3xl tracking-wide text-[#16502D]">PANEL DE USUARIO</h1>
      <p className="text-muted-foreground">
        Accede a lo mínimo necesario: visualizar, modificar su información personal, etc.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-l-4 border-l-[#9CC200]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Artículos de Noticias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">342</div>
              <Activity className="h-8 w-8 text-[#1B8F31]" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">+8 publicados hoy</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#9CC200]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Información Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-[#1B8F31]" />
                <span className="text-sm">John Doe</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#1B8F31]" />
                <span className="text-sm">john.doe@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-[#1B8F31]" />
                <span className="text-sm">Última actualización: 15/04/2023</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-anton text-xl text-[#16502D]">ÚLTIMAS NOTICIAS</CardTitle>
          <CardDescription>8 artículos publicados hoy</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentNewsTable />
        </CardContent>
      </Card>
    </div>
  )
}
