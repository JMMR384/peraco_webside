import type React from "react"
import {
  User,
  Lock,
  CheckCircle,
  Clock,
  Trash2,
  UserCheck,
  FileImage,
  FileText,
  Mail,
  PenTool,
  ShieldCheck,
} from "lucide-react"

type UserRole = "admin" | "supervisor" | "designer" | "editor"

// Definición de acciones (procedimientos o funciones)
export interface Action {
  name: string
  displayName: string
  description: string
  params: string
  icon: React.ComponentType<{ className?: string }>
  roles: UserRole[]
  type: "procedure" | "function"
}

// Definición de todas las acciones
export const allActions: Action[] = [
  // Acciones de Usuario
  {
    name: "actualizar_usuario",
    displayName: "Actualizar usuario",
    description: "Actualizar información personal",
    params: "(p_id, p_nombre, p_correo)",
    icon: User,
    roles: ["editor", "admin"],
    type: "procedure",
  },
  {
    name: "actualizar_contraseña",
    displayName: "Actualizar contraseña",
    description: "Cambiar contraseña",
    params: "(p_id, p_nueva_contraseña)",
    icon: Lock,
    roles: ["editor", "admin"],
    type: "procedure",
  },
  {
    name: "nombre_usuario",
    displayName: "Obtener nombre",
    description: "Obtener nombre de usuario",
    params: "(p_id)",
    icon: User,
    roles: ["editor", "admin"],
    type: "function",
  },
  {
    name: "correo_usuario",
    displayName: "Obtener correo",
    description: "Obtener correo de usuario",
    params: "(p_id)",
    icon: Mail,
    roles: ["editor", "admin"],
    type: "function",
  },

  // Acciones de Imágenes
  {
    name: "insertar_imagen",
    displayName: "Crear imagen",
    description: "Crear imagen publicitaria",
    params: "(...)",
    icon: FileImage,
    roles: ["designer", "admin"],
    type: "procedure",
  },
  {
    name: "aprobar_imagen",
    displayName: "Aprobar imagen",
    description: "Aprobar imagen publicitaria",
    params: "(p_id_imagen, p_id_supervisor)",
    icon: CheckCircle,
    roles: ["supervisor", "admin"],
    type: "procedure",
  },
  {
    name: "cambiar_estado_imagen",
    displayName: "Cambiar estado de imagen",
    description: "Cambiar estado de imagen",
    params: "(p_id_imagen, p_nuevo_estado, p_id_supervisor)",
    icon: Clock,
    roles: ["supervisor", "admin"],
    type: "procedure",
  },
  {
    name: "eliminar_imagen",
    displayName: "Eliminar imagen",
    description: "Eliminar imagen publicitaria",
    params: "(p_id_imagen, p_id_usuario)",
    icon: Trash2,
    roles: ["supervisor", "admin"],
    type: "procedure",
  },
  {
    name: "imagen_autorizada",
    displayName: "Verificar imagen autorizada",
    description: "Verificar si una imagen está autorizada",
    params: "(p_id_imagen)",
    icon: CheckCircle,
    roles: ["designer", "supervisor", "admin"],
    type: "function",
  },
  {
    name: "imagenes_autorizadas_por",
    displayName: "Imágenes autorizadas por supervisor",
    description: "Ver imágenes autorizadas por supervisor",
    params: "(p_id_supervisor)",
    icon: FileImage,
    roles: ["designer", "supervisor", "admin"],
    type: "function",
  },
  {
    name: "imagenes_pendientes",
    displayName: "Imágenes pendientes",
    description: "Ver imágenes pendientes de aprobación",
    params: "()",
    icon: Clock,
    roles: ["designer", "supervisor", "admin"],
    type: "function",
  },

  // Acciones de Noticias
  {
    name: "crear_noticia",
    displayName: "Crear noticia",
    description: "Crear un nuevo artículo de noticias",
    params: "(p_titulo, p_resumen, p_contenido, p_imagen)",
    icon: PenTool,
    roles: ["editor", "admin"],
    type: "procedure",
  },
  {
    name: "aprobar_noticia",
    displayName: "Aprobar noticia",
    description: "Aprobar artículo de noticias",
    params: "(p_id_noticia, p_id_supervisor)",
    icon: CheckCircle,
    roles: ["supervisor", "admin"],
    type: "procedure",
  },
  {
    name: "cambiar_estado_noticia",
    displayName: "Cambiar estado de noticia",
    description: "Cambiar estado de noticia",
    params: "(p_id_noticia, p_nuevo_estado, p_id_supervisor)",
    icon: Clock,
    roles: ["supervisor", "admin"],
    type: "procedure",
  },
  {
    name: "eliminar_noticia",
    displayName: "Eliminar noticia",
    description: "Eliminar artículo de noticias",
    params: "(p_id_noticia, p_id_usuario)",
    icon: Trash2,
    roles: ["supervisor", "admin"],
    type: "procedure",
  },
  {
    name: "noticia_autorizada",
    displayName: "Verificar noticia autorizada",
    description: "Verificar si una noticia está autorizada",
    params: "(p_id_noticia)",
    icon: CheckCircle,
    roles: ["editor", "supervisor", "admin"],
    type: "function",
  },
  {
    name: "noticias_autorizadas_por",
    displayName: "Noticias autorizadas por supervisor",
    description: "Ver noticias autorizadas por supervisor",
    params: "(p_id_supervisor)",
    icon: CheckCircle,
    roles: ["supervisor", "admin"],
    type: "function",
  },
  {
    name: "noticias_pendientes",
    displayName: "Noticias pendientes",
    description: "Ver noticias pendientes de aprobación",
    params: "()",
    icon: Clock,
    roles: ["editor", "supervisor", "admin"],
    type: "function",
  },
  {
    name: "total_noticias_por_usuario",
    displayName: "Total noticias por usuario",
    description: "Ver total de noticias publicadas",
    params: "(p_id)",
    icon: FileText,
    roles: ["editor", "admin"],
    type: "function",
  },

  // Acciones de Administración
  {
    name: "crear_usuario",
    displayName: "Crear usuario",
    description: "Crear nuevo usuario en el sistema",
    params: "(p_id, p_nombre, p_correo, p_contraseña, p_id_rol, p_supervisor_id)",
    icon: User,
    roles: ["admin"],
    type: "procedure",
  },
  {
    name: "obtener_rol",
    displayName: "Obtener rol",
    description: "Obtener rol de un usuario",
    params: "(p_id)",
    icon: UserCheck,
    roles: ["admin"],
    type: "function",
  },
  {
    name: "verificar_supervisor",
    displayName: "Verificar supervisor",
    description: "Verificar si un usuario es supervisor",
    params: "(p_id_usuario)",
    icon: ShieldCheck,
    roles: ["admin"],
    type: "function",
  },
]
