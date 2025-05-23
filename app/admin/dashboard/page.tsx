"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Users, FileText, ShoppingCart } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" })

  // Datos de ejemplo
  const [users, setUsers] = useState([
    { id: 1, name: "Cliente Ejemplo", email: "cliente@example.com", active: true },
    { id: 2, name: "Juan Pérez", email: "juan@example.com", active: true },
    { id: 3, name: "María García", email: "maria@example.com", active: false },
  ])

  const [catalogs, setCatalogs] = useState([
    { id: 1, name: "Catálogo Verano 2025", type: "Excel", uploadDate: "15/05/2025" },
    { id: 2, name: "Productos Especiales", type: "PDF", uploadDate: "10/05/2025" },
  ])

  const [orders, setOrders] = useState([
    { id: 1, client: "Cliente Ejemplo", date: "18/05/2025", status: "Pendiente", total: "$15,000" },
    { id: 2, client: "Juan Pérez", date: "17/05/2025", status: "Aprobado", total: "$8,500" },
  ])

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault()
    const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1
    setUsers([...users, { id: newId, name: newUser.name, email: newUser.email, active: true }])
    setNewUser({ name: "", email: "", password: "" })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // En una implementación real, aquí se procesaría el archivo
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const newId = catalogs.length > 0 ? Math.max(...catalogs.map((c) => c.id)) + 1 : 1
      const fileType = file.name.endsWith(".pdf") ? "PDF" : "Excel"

      setCatalogs([
        ...catalogs,
        {
          id: newId,
          name: file.name,
          type: fileType,
          uploadDate: new Date().toLocaleDateString("es-ES"),
        },
      ])
    }
  }

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#2C3E50]">Panel de Administración</h1>
          <Button onClick={handleLogout} variant="outline" className="border-[#2C3E50] text-[#2C3E50]">
            Cerrar Sesión
          </Button>
        </div>

        <Tabs defaultValue="users">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="users" className="text-[#2C3E50]">
              <Users className="mr-2 h-4 w-4" />
              Usuarios
            </TabsTrigger>
            <TabsTrigger value="catalogs" className="text-[#2C3E50]">
              <FileText className="mr-2 h-4 w-4" />
              Catálogos
            </TabsTrigger>
            <TabsTrigger value="orders" className="text-[#2C3E50]">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Pedidos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">Agregar Usuario</CardTitle>
                  <CardDescription>Cree nuevas cuentas para sus clientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddUser} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input
                        id="name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Contraseña</Label>
                      <Input
                        id="password"
                        type="password"
                        value={newUser.password}
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#2C3E50] hover:bg-[#1a2530]">
                      Agregar Usuario
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">Usuarios Registrados</CardTitle>
                  <CardDescription>Administre los usuarios existentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded text-xs ${user.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                            >
                              {user.active ? "Activo" : "Inactivo"}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <span className="sr-only">Editar</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                <path d="m15 5 4 4" />
                              </svg>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="catalogs">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">Subir Catálogo</CardTitle>
                  <CardDescription>Suba archivos Excel o PDF con sus productos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">Arrastre y suelte archivos aquí o</p>
                      <label htmlFor="file-upload" className="mt-2 inline-block">
                        <span className="rounded bg-[#2C3E50] px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#1a2530] cursor-pointer">
                          Seleccionar archivo
                        </span>
                        <Input
                          id="file-upload"
                          type="file"
                          accept=".xlsx,.xls,.pdf"
                          className="sr-only"
                          onChange={handleFileUpload}
                        />
                      </label>
                      <p className="mt-2 text-xs text-gray-500">Formatos soportados: Excel, PDF</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">Catálogos Disponibles</CardTitle>
                  <CardDescription>Administre los catálogos existentes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {catalogs.map((catalog) => (
                        <TableRow key={catalog.id}>
                          <TableCell>{catalog.name}</TableCell>
                          <TableCell>{catalog.type}</TableCell>
                          <TableCell>{catalog.uploadDate}</TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <span className="sr-only">Ver</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                >
                                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                                <span className="sr-only">Eliminar</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                >
                                  <path d="M3 6h18" />
                                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                </svg>
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50]">Pedidos Recibidos</CardTitle>
                <CardDescription>Administre los pedidos de sus clientes</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>#{order.id}</TableCell>
                        <TableCell>{order.client}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              order.status === "Aprobado"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Rechazado"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell>{order.total}</TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <span className="sr-only">Ver</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-green-500">
                              <span className="sr-only">Aprobar</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                              <span className="sr-only">Rechazar</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                              </svg>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}
