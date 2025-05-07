"use client"

import { useState } from "react"
import { Search, Filter, Bell, CheckCircle, AlertCircle, Info, Calendar, FileText, FileImage, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardShell } from "@/components/dashboard-shell"

const notifications = [
  {
    id: "NOTIF-001",
    title: "Nueva solicitud de aprobación",
    message: "Jane Smith ha enviado una nueva imagen publicitaria para su aprobación.",
    date: "2023-04-15 10:30",
    type: "approval",
    read: false,
  },
  {
    id: "NOTIF-002",
    title: "Artículo aprobado",
    message: "Tu artículo 'Lanzamiento de Nuevo Producto' ha sido aprobado.",
    date: "2023-04-14 15:45",
    type: "news",
    read: false,
  },
  {
    id: "NOTIF-003",
    title: "Imagen rechazada",
    message: "Tu imagen 'Promoción de Venta Relámpago' ha sido rechazada. Revisa los comentarios.",
    date: "2023-04-13 09:15",
    type: "image",
    read: false,
  },
  {
    id: "NOTIF-004",
    title: "Nuevo usuario registrado",
    message: "Sofia Davis se ha registrado como Editor.",
    date: "2023-04-12 14:20",
    type: "user",
    read: true,
  },
  {
    id: "NOTIF-005",
    title: "Recordatorio de evento",
    message: "El evento 'Lanzamiento de Campaña de Verano' está programado para mañana.",
    date: "2023-04-11 16:30",
    type: "event",
    read: true,
  },
  {
    id: "NOTIF-006",
    title: "Actualización del sistema",
    message: "El sistema se actualizará esta noche a las 22:00. Puede haber interrupciones temporales.",
    date: "2023-04-10 11:05",
    type: "system",
    read: true,
  },
]

export function NotificationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredNotifications = notifications.filter(
    (notification) =>
      (activeTab === "all" ||
        (activeTab === "unread" && !notification.read) ||
        (activeTab === "read" && notification.read)) &&
      (searchTerm === "" ||
        notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "approval":
        return <CheckCircle className="h-5 w-5 text-[#1B8F31]" />
      case "news":
        return <FileText className="h-5 w-5 text-[#1B8F31]" />
      case "image":
        return <FileImage className="h-5 w-5 text-[#1B8F31]" />
      case "user":
        return <User className="h-5 w-5 text-[#1B8F31]" />
      case "event":
        return <Calendar className="h-5 w-5 text-[#1B8F31]" />
      case "system":
        return <AlertCircle className="h-5 w-5 text-[#1B8F31]" />
      default:
        return <Info className="h-5 w-5 text-[#1B8F31]" />
    }
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-anton text-3xl tracking-wide text-[#16502D]">NOTIFICACIONES</h1>
            <p className="text-muted-foreground">Gestiona tus notificaciones y alertas del sistema.</p>
          </div>
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" /> Marcar todas como leídas
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar notificaciones..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filtrar</span>
          </Button>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="unread">No leídas</TabsTrigger>
            <TabsTrigger value="read">Leídas</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {activeTab === "all"
                    ? "Todas las notificaciones"
                    : activeTab === "unread"
                      ? "Notificaciones no leídas"
                      : "Notificaciones leídas"}
                </CardTitle>
                <CardDescription>
                  Total: {filteredNotifications.length} notificación{filteredNotifications.length !== 1 ? "es" : ""}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 rounded-lg border p-4 ${
                        !notification.read ? "bg-[#9CC200]/5 border-[#9CC200]/20" : ""
                      }`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9CC200]/10">
                        {getTypeIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{notification.title}</h3>
                          <span className="text-xs text-muted-foreground">{notification.date}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
                      </div>
                      {!notification.read && (
                        <Badge className="bg-[#9CC200] text-white" variant="secondary">
                          Nueva
                        </Badge>
                      )}
                    </div>
                  ))}

                  {filteredNotifications.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                      <Bell className="mb-2 h-12 w-12 opacity-20" />
                      <h3 className="text-lg font-medium">No hay notificaciones</h3>
                      <p>No tienes notificaciones en esta categoría.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
