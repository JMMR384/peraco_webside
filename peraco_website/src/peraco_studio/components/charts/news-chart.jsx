"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

export function NewsChart() {
  // Datos de ejemplo para los últimos 6 meses
  const data = [
    { name: "Enero", noticias: 18, imagenes: 12 },
    { name: "Febrero", noticias: 22, imagenes: 15 },
    { name: "Marzo", noticias: 30, imagenes: 18 },
    { name: "Abril", noticias: 25, imagenes: 20 },
    { name: "Mayo", noticias: 32, imagenes: 22 },
    { name: "Junio", noticias: 28, imagenes: 16 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="noticias" name="Noticias" fill="#16502D" />
        <Bar dataKey="imagenes" name="Imágenes" fill="#9CC200" />
      </BarChart>
    </ResponsiveContainer>
  )
}
