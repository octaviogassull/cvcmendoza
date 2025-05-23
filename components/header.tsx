"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="CVC Mendoza" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold text-[#2C3E50]">CVC Mendoza</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-[#2C3E50] hover:underline underline-offset-4">
            Inicio
          </Link>
          <Link href="/catalogo" className="text-sm font-medium text-[#2C3E50] hover:underline underline-offset-4">
            Catálogo
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-[#2C3E50] hover:underline underline-offset-4">
            Contacto
          </Link>
        </nav>
        <div className="ml-auto md:ml-4 flex gap-2">
          <Link href="/login">
            <Button variant="outline" className="hidden md:flex border-[#2C3E50] text-[#2C3E50]">
              Iniciar Sesión
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden border-[#2C3E50]">
                <Menu className="h-5 w-5 text-[#2C3E50]" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/catalogo"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  Catálogo
                </Link>
                <Link
                  href="/contacto"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
                <Link
                  href="/login"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  Iniciar Sesión
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
