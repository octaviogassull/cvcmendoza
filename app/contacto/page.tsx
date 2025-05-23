import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-[#2C3E50] mb-6">Contacto</h1>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50]">Envíenos un mensaje</CardTitle>
                <CardDescription>
                  Complete el formulario y nos pondremos en contacto con usted a la brevedad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Su nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Su email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="Su teléfono" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea id="message" placeholder="¿En qué podemos ayudarle?" rows={4} />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#2C3E50] hover:bg-[#1a2530]">Enviar Mensaje</Button>
              </CardFooter>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">Información de Contacto</CardTitle>
                  <CardDescription>Puede contactarnos a través de los siguientes medios.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#2C3E50] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-sm text-gray-500">+54 9 2613873329</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#2C3E50] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-gray-500">casaveracruzmendoza@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#2C3E50] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Dirección</h3>
                      <p className="text-sm text-gray-500">Mendoza, Argentina</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">Horario de Atención</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Lunes a Viernes</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Domingos y Feriados</span>
                    <span>Cerrado</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
