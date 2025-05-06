import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentNewsTable } from "../tables/recent-news-table"
import { ApprovalRequestsTable } from "../tables/approval-requests-table"
import { UsersChart } from "../charts/users-chart"
import { NewsChart } from "../charts/news-chart"

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-[#9CC200]"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Noticias Publicadas</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-[#9CC200]"
            >
              <path d="M8 3H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L15 .586A2 2 0 0 0 13.586 0H8a2 2 0 0 0-2 2v1Z" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21v-7.4a.6.6 0 0 0-.6-.6H7.6a.6.6 0 0 0-.6.6v7.4" />
              <path d="M7 16.2h10" />
              <path d="M7 19.2h10" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-muted-foreground">+23 desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Imágenes Publicadas</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-[#9CC200]"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="m2 10 6 4 6-4" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">+12 desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendientes de Aprobación</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-[#9CC200]"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">-2 desde ayer</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-muted/60">
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="news">Noticias</TabsTrigger>
          <TabsTrigger value="approvals">Aprobaciones</TabsTrigger>
          <TabsTrigger value="users">Usuarios</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Noticias por Mes</CardTitle>
                <CardDescription>Distribución de noticias publicadas en los últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <NewsChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Usuarios por Rol</CardTitle>
                <CardDescription>Distribución de usuarios según su rol en el sistema</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <UsersChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="news" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Noticias Recientes</CardTitle>
              <CardDescription>Últimas noticias publicadas en el sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentNewsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Solicitudes de Aprobación</CardTitle>
              <CardDescription>Contenido pendiente de aprobación</CardDescription>
            </CardHeader>
            <CardContent>
              <ApprovalRequestsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Actividad de Usuarios</CardTitle>
              <CardDescription>Usuarios más activos en el sistema</CardDescription>
            </CardHeader>
            <CardContent>{/* Tabla de usuarios activos */}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
