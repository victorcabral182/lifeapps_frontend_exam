import Image from "next/image"
import logo from "@/assets/images/logo.png"

export const Footer = () => {
  return (
    <>
      <footer className="w-full h-[160px] bg-gray-300 flex items-center justify-between px-8">
        <Image src={logo} alt="logo" width={100} height={100} />
        <p>Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
