import Image from "next/image"
import logo from "@/assets/images/logo.png"

export const Footer = () => {
  return (
    <footer className="w-full h-auto bg-gray-300 flex flex-col md:flex-row items-center justify-between p-4 md:px-8">
      <Image
        src={logo}
        alt="Logo da Empresa"
        width={100}
        height={100}
        className="mb-4 md:mb-0"
      />
      <small className="text-center text-gray-700">
        © 2025 Todos os direitos reservados.
      </small>
    </footer>
  )
}
