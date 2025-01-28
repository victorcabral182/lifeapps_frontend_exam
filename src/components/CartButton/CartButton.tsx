import { useRouter } from "next/navigation"
import { Button } from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"

export const CartButton = ({ quantity }: { quantity: number }) => {
  const { push } = useRouter()

  const handleNavigation = () => {
    push("/cart")
  }

  return (
    <Button className="w-8 relative" onClick={handleNavigation}>
      <ShoppingCartOutlined />
      {quantity > 0 && (
        <span className="absolute top-[-8px] right-[-8px] flex size-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#007cc3] opacity-75"></span>
          <span className="relative inline-flex size-5 rounded-full bg-[#007cc3]">
            <span className="absolute right-[8px] top-[2px] text-[10px] font-semibold text-[#f7f7f7]">
              {quantity}
            </span>
          </span>
        </span>
      )}
    </Button>
  )
}
