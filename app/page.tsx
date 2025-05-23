import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2C3E50]">
                    Bienvenido a Casa Vera Cruz Mendoza
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Su plataforma exclusiva para acceder a nuestros catálogos y realizar pedidos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login">
                    <Button className="bg-[#2C3E50] hover:bg-[#1a2530]">Iniciar Sesión</Button>
                  </Link>
                  <Link href="/contacto">
                    <Button variant="outline" className="border-[#2C3E50] text-[#2C3E50]">
                      Contacto
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/logo.png"
                  alt="CVC Mendoza"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2C3E50] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una plataforma exclusiva para nuestros clientes donde pueden:
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 max-w-4xl">
                <div className="flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg">
                  <div className="p-2 bg-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2C3E50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Acceso Exclusivo</h3>
                  <p className="text-gray-200 text-sm text-center">
                    Solo clientes autorizados pueden acceder a nuestros catálogos.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg">
                  <div className="p-2 bg-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2C3E50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Catálogos Actualizados</h3>
                  <p className="text-gray-200 text-sm text-center">
                    Acceda a nuestros catálogos siempre actualizados con los últimos productos.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg">
                  <div className="p-2 bg-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2C3E50"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="8" cy="21" r="1"></circle>
                      <circle cx="19" cy="21" r="1"></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Pedidos Online</h3>
                  <p className="text-gray-200 text-sm text-center">
                    Realice sus pedidos y obtenga presupuestos de manera rápida y sencilla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#2C3E50]">Contáctenos</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aquí para ayudarle con cualquier consulta.
                </p>
              </div>
              <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-[#2C3E50]">Teléfono</h3>
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    <Phone className="h-4 w-4" />
                    +54 9 2613873329
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-[#2C3E50]">Email</h3>
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    <Mail className="h-4 w-4" />
                    casaveracruzmendoza@gmail.com
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-[#2C3E50]">Horario de Atención</h3>
                  <p className="text-sm text-gray-500">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
