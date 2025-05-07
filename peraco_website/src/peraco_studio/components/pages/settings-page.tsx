"use client"

import { useState } from "react"
import { Settings, User, Lock, Bell, Moon, Sun, Globe, Shield, Database, Save, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardShell } from "@/components/dashboard-shell"

export function SettingsPage() {
  const [loading, setLoading] = useState(false)

  const handleSave = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-anton text-3xl tracking-wide text-[#16502D]">CONFIGURACIÓN</h1>
          <p className="text-muted-foreground">Gestiona la configuración de tu cuenta y del sistema.</p>
        </div>

        <Tabs defaultValue="account">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="md:w-64">
              <TabsList className="flex flex-col items-start h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="account"
                  className="w-full justify-start px-3 py-2 data-[state=active]:bg-[#9CC200]/10 data-[state=active]:text-[#16502D]"
                >
                  <User className="mr-2 h-4 w-4" />
                  Cuenta
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="w-full justify-start px-3 py-2 data-[state=active]:bg-[#9CC200]/10 data-[state=active]:text-[#16502D]"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Seguridad
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="w-full justify-start px-3 py-2 data-[state=active]:bg-[#9CC200]/10 data-[state=active]:text-[#16502D]"
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notificaciones
                </TabsTrigger>
                <TabsTrigger
                  value="appearance"
                  className="w-full justify-start px-3 py-2 data-[state=active]:bg-[#9CC200]/10 data-[state=active]:text-[#16502D]"
                >
                  <Sun className="mr-2 h-4 w-4" />
                  Apariencia
                </TabsTrigger>
                <TabsTrigger
                  value="language"
                  className="w-full justify-start px-3 py-2 data-[state=active]:bg-[#9CC200]/10 data-[state=active]:text-[#16502D]"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Idioma
                </TabsTrigger>
                <Separator className="my-2" />
                <TabsTrigger
                  value="permissions"
                  className="w-full justify-start px-3 py-2 data-[state=active]:bg-[#9CC200]/10 data-[state=active]:text-[#16502D]"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Permisos
                </TabsTrigger>
                <TabsTrigger
                  value="database"
                  className="w-full justify-start px-3 py-2 data-[state=active]:bg-[#9CC200]/10 data-[state=active]:text-[#16502D]"
                >
                  <Database className="mr-2 h-4 w-4" />
                  Base de Datos
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="flex-1">
              <TabsContent value="account" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de Cuenta</CardTitle>
                    <CardDescription>Actualiza tu información personal y detalles de contacto.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Nombre</Label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Apellido</Label>
                        <Input id="last-name" defaultValue="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" defaultValue="john.doe@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Rol</Label>
                      <Select defaultValue="admin">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un rol" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Administrador</SelectItem>
                          <SelectItem value="supervisor">Supervisor</SelectItem>
                          <SelectItem value="designer">Diseñador</SelectItem>
                          <SelectItem value="editor">Editor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave} disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Guardar Cambios
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="security" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Seguridad</CardTitle>
                    <CardDescription>
                      Gestiona tu contraseña y la configuración de seguridad de tu cuenta.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Contraseña Actual</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva Contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Autenticación de Dos Factores</Label>
                        <p className="text-sm text-muted-foreground">
                          Añade una capa adicional de seguridad a tu cuenta.
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave} disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Guardar Cambios
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="notifications" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Notificaciones</CardTitle>
                    <CardDescription>Configura cómo y cuándo recibes notificaciones.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Notificaciones por Correo</Label>
                        <p className="text-sm text-muted-foreground">Recibe notificaciones por correo electrónico.</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Notificaciones de Aprobación</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones cuando se aprueben tus solicitudes.
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Notificaciones de Sistema</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe notificaciones sobre actualizaciones del sistema.
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave} disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Guardar Cambios
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="appearance" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Apariencia</CardTitle>
                    <CardDescription>Personaliza la apariencia de la interfaz de usuario.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Tema</Label>
                      <div className="flex items-center gap-4">
                        <Button variant="outline" className="flex-1 justify-start">
                          <Sun className="mr-2 h-4 w-4" /> Claro
                        </Button>
                        <Button variant="outline" className="flex-1 justify-start">
                          <Moon className="mr-2 h-4 w-4" /> Oscuro
                        </Button>
                        <Button variant="outline" className="flex-1 justify-start">
                          <Settings className="mr-2 h-4 w-4" /> Sistema
                        </Button>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label>Color Principal</Label>
                      <div className="grid grid-cols-5 gap-2">
                        <div className="h-10 rounded-md bg-[#16502D] cursor-pointer ring-2 ring-offset-2 ring-[#16502D]" />
                        <div className="h-10 rounded-md bg-blue-600 cursor-pointer" />
                        <div className="h-10 rounded-md bg-purple-600 cursor-pointer" />
                        <div className="h-10 rounded-md bg-red-600 cursor-pointer" />
                        <div className="h-10 rounded-md bg-orange-600 cursor-pointer" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave} disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Guardar Cambios
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="language" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Idioma</CardTitle>
                    <CardDescription>Configura el idioma de la interfaz de usuario.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">Idioma</Label>
                      <Select defaultValue="es">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un idioma" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                          <SelectItem value="pt">Português</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Formato de Fecha</Label>
                      <Select defaultValue="dd-mm-yyyy">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un formato de fecha" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                          <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave} disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Guardar Cambios
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="permissions" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Permisos</CardTitle>
                    <CardDescription>Configura los permisos de los usuarios en el sistema.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Roles</Label>
                      <div className="rounded-md border">
                        <div className="flex items-center justify-between p-4 border-b">
                          <div>
                            <h4 className="font-medium">Administrador</h4>
                            <p className="text-sm text-muted-foreground">Acceso completo al sistema</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border-b">
                          <div>
                            <h4 className="font-medium">Supervisor</h4>
                            <p className="text-sm text-muted-foreground">Aprobación de contenido y gestión limitada</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-4 border-b">
                          <div>
                            <h4 className="font-medium">Diseñador</h4>
                            <p className="text-sm text-muted-foreground">Gestión de imágenes y diseño</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-4">
                          <div>
                            <h4 className="font-medium">Editor</h4>
                            <p className="text-sm text-muted-foreground">Creación y edición de noticias</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label>Permisos Personalizados</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Gestión de Usuarios</Label>
                            <p className="text-sm text-muted-foreground">Crear, editar y eliminar usuarios</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Gestión de Contenido</Label>
                            <p className="text-sm text-muted-foreground">Crear, editar y eliminar contenido</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Aprobaciones</Label>
                            <p className="text-sm text-muted-foreground">Aprobar o rechazar solicitudes</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave} disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Guardar Cambios
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="database" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Base de Datos</CardTitle>
                    <CardDescription>
                      Configura la conexión a la base de datos y realiza operaciones de mantenimiento.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="db-host">Host</Label>
                      <Input id="db-host" defaultValue="localhost" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="db-port">Puerto</Label>
                      <Input id="db-port" defaultValue="5432" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="db-name">Nombre de la Base de Datos</Label>
                      <Input id="db-name" defaultValue="company_dashboard" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="db-user">Usuario</Label>
                      <Input id="db-user" defaultValue="admin" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="db-password">Contraseña</Label>
                      <Input id="db-password" type="password" defaultValue="********" />
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-2">
                      <Button variant="outline">Probar Conexión</Button>
                      <Button variant="outline">Realizar Copia de Seguridad</Button>
                      <Button variant="outline" className="text-red-600">
                        Restaurar Base de Datos
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave} disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Guardando...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Guardar Cambios
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
