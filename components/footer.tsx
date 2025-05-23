import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-[#2C3E50] text-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} Casa Vera Cruz Mendoza. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="tel:+5492613873329" className="flex items-center gap-1 text-sm">
            <Phone className="h-4 w-4" />
            +54 9 2613873329
          </Link>
          <Link href="mailto:casaveracruzmendoza@gmail.com" className="flex items-center gap-1 text-sm">
            <Mail className="h-4 w-4" />
            casaveracruzmendoza@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
