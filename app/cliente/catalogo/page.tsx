"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, FileText, Download, Plus, Minus, Trash2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ClienteCatalogo() {
  const router = useRouter()

  // Datos de ejemplo
  const [catalogs, setCatalogs] = useState([
    { id: 1, name: "Catálogo Verano 2025", type: "Excel", uploadDate: "15/05/2025" },
    { id: 2, name: "Productos Especiales", type: "PDF", uploadDate: "10/05/2025" },
  ])

  const [products, setProducts] = useState([
    { id: 1, code: "P001", name: "Producto 1", price: 1500, category: "Categoría A" },
    { id: 2, code: "P002", name: "Producto 2", price: 2200, category: "Categoría A" },
    { id: 3, code: "P003", name: "Producto 3", price: 3000, category: "Categoría B" },
    { id: 4, code: "P004", name: "Producto 4", price: 1800, category: "Categoría B" },
    { id: 5, code: "P005", name: "Producto 5", price: 2500, category: "Categoría C" },
  ])

  const [cart, setCart] = useState<Array<{ product: any; quantity: number }>>([])
  const [notes, setNotes] = useState("")

  const handleAddToCart = (product: any) => {
    const existingItem = cart.find((item) => item.product.id === product.id)

    if (existingItem) {
      setCart(cart.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { product, quantity: 1 }])
    }
  }

  const handleRemoveFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.product.id !== productId))
  }

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId)
      return
    }

    setCart(cart.map((item) => (item.product.id === productId ? { ...item, quantity: newQuantity } : item)))
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
  }

  const handleSubmitOrder = () => {
    // En una implementación real, aquí se enviaría el pedido a la API
    alert("Pedido enviado con éxito. El administrador revisará su solicitud.")
    setCart([])
    setNotes("")
  }

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#2C3E50]">Catálogo de Productos</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="relative border-[#2C3E50] text-[#2C3E50]" onClick={() => {}}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrito
              {cart.length > 0 && <Badge className="absolute -top-2 -right-2 bg-[#2C3E50]">{cart.length}</Badge>}
            </Button>
            <Button onClick={handleLogout} variant="outline" className="border-[#2C3E50] text-[#2C3E50]">
              Cerrar Sesión
            </Button>
          </div>
        </div>

        <Tabs defaultValue="products">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="catalogs" className="text-[#2C3E50]">
              <FileText className="mr-2 h-4 w-4" />
              Catálogos
            </TabsTrigger>
            <TabsTrigger value="products" className="text-[#2C3E50]">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Productos
            </TabsTrigger>
            <TabsTrigger value="cart" className="text-[#2C3E50]">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Mi Carrito
            </TabsTrigger>
          </TabsList>

          <TabsContent value="catalogs">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50]">Catálogos Disponibles</CardTitle>
                <CardDescription>Descargue los catálogos para ver todos los productos disponibles</CardDescription>
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
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            Descargar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50]">Lista de Productos</CardTitle>
                <CardDescription>Agregue productos a su carrito para realizar un pedido</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Código</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Categoría</TableHead>
                      <TableHead>Precio</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.code}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price.toLocaleString()}</TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 border-[#2C3E50] text-[#2C3E50]"
                            onClick={() => handleAddToCart(product)}
                          >
                            <Plus className="h-4 w-4" />
                            Agregar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cart">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50]">Mi Carrito</CardTitle>
                <CardDescription>Revise los productos seleccionados y envíe su pedido</CardDescription>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">Su carrito está vacío</p>
                    <Button
                      variant="outline"
                      className="mt-4 border-[#2C3E50] text-[#2C3E50]"
                      onClick={() => document.querySelector('[data-value="products"]')?.click()}
                    >
                      Ver Productos
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Producto</TableHead>
                          <TableHead>Precio</TableHead>
                          <TableHead>Cantidad</TableHead>
                          <TableHead>Subtotal</TableHead>
                          <TableHead>Acciones</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cart.map((item) => (
                          <TableRow key={item.product.id}>
                            <TableCell>{item.product.name}</TableCell>
                            <TableCell>${item.product.price.toLocaleString()}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 p-0"
                                  onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 p-0"
                                  onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                            <TableCell>${(item.product.price * item.quantity).toLocaleString()}</TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-500"
                                onClick={() => handleRemoveFromCart(item.product.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between text-lg font-semibold mb-4">
                        <span>Total:</span>
                        <span>${calculateTotal().toLocaleString()}</span>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="notes">Notas adicionales</Label>
                          <Textarea
                            id="notes"
                            placeholder="Instrucciones especiales para su pedido"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                          />
                        </div>

                        <Button className="w-full bg-[#2C3E50] hover:bg-[#1a2530]" onClick={handleSubmitOrder}>
                          Enviar Pedido
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}
