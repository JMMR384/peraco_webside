import "./globals.css"

export const metadata = {
  title: "Dashboard Corporativo",
  description: "Sistema de gestión de contenido corporativo",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
