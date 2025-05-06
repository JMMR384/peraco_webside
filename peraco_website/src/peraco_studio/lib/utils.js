import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Funciones de utilidad para el sistema

// Funciones para usuarios
export const nombreUsuario = (userId) => {
  // Simulación: En un caso real, esto haría una consulta a la base de datos
  const users = {
    1: "Juan Pérez",
    2: "María López",
    3: "Carlos Rodríguez",
    4: "Ana Martínez",
    5: "Roberto Sánchez",
  }
  return users[userId] || "Usuario Desconocido"
}

export const correoUsuario = (userId) => {
  // Simulación
  const emails = {
    1: "juan@ejemplo.com",
    2: "maria@ejemplo.com",
    3: "carlos@ejemplo.com",
    4: "ana@ejemplo.com",
    5: "roberto@ejemplo.com",
  }
  return emails[userId] || "correo@ejemplo.com"
}

export const obtenerRol = (userId) => {
  // Simulación
  const roles = {
    1: "admin",
    2: "supervisor",
    3: "designer",
    4: "editor",
    5: "editor",
  }
  return roles[userId] || "editor"
}

export const verificarSupervisor = (userId) => {
  return obtenerRol(userId) === "supervisor" || obtenerRol(userId) === "admin"
}

// Funciones para noticias
export const noticiaAutorizada = (newsId) => {
  // Simulación
  const authorizedNews = [1, 2, 3, 4, 5]
  return authorizedNews.includes(newsId)
}

export const noticiasAutorizadasPor = (supervisorId) => {
  // Simulación
  if (verificarSupervisor(supervisorId)) {
    return [1, 2, 3, 4, 5]
  }
  return []
}

export const noticiasPendientes = () => {
  // Simulación
  return [6, 7, 8]
}

export const totalNoticiasPorUsuario = (userId) => {
  // Simulación
  const newsCounts = {
    1: 5,
    2: 8,
    3: 0,
    4: 12,
    5: 7,
  }
  return newsCounts[userId] || 0
}

// Funciones para imágenes
export const imagenAutorizada = (imageId) => {
  // Simulación
  const authorizedImages = [1, 2, 3, 4]
  return authorizedImages.includes(imageId)
}

export const imagenesAutorizadasPor = (supervisorId) => {
  // Simulación
  if (verificarSupervisor(supervisorId)) {
    return [1, 2, 3, 4]
  }
  return []
}

export const imagenesPendientes = () => {
  // Simulación
  return [5, 6, 7]
}
