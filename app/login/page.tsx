"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      // En una implementación real, esto se conectaría a una API
      // Por ahora, simulamos un login básico
      if (email === "admin@example.com" && password === "admin") {
        // Admin login
        router.push("/admin/dashboard")
      } else if (email === "cliente@example.com" && password === "cliente") {
        // Cliente login
        router.push("/cliente/catalogo")
      } else {
        setError("Credenciales inválidas. Por favor, contacte al administrador.")
      }
    } catch (err) {
      setError("Error al iniciar sesión. Intente nuevamente.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-[#2C3E50]">Iniciar Sesión</CardTitle>
            <CardDescription>Ingrese sus credenciales para acceder a su cuenta</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-[#2C3E50] hover:bg-[#1a2530]">
                Iniciar Sesión
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
