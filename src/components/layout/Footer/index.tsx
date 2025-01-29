import Image from "next/image"
import logo from "@/assets/images/logo.png"

export const Footer = () => {
  return (
    <footer className="w-full h-auto bg-gray-300 flex flex-col md:flex-row items-center justify-between p-4 md:px-8 lg:px-12">
      <Image
        src={logo}
        alt="Logo da Empresa"
        width={80}
        height={80}
        className="mb-4 md:mb-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
      />
      <small className="text-center text-gray-700 text-sm md:text-base">
        © 2025 Todos os direitos reservados.
      </small>
    </footer>
  )
}
