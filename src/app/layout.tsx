import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portafolio de Ciberseguridad',
  description: 'Mi portafolio profesional de ciberseguridad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
} 