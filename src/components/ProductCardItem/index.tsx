import { IProduct } from "@/types"
import { formatCurrency } from "@/utils"
import Image from "next/image"

interface IProductCardItemProps {
  item: IProduct
  isPromo: boolean
}

export const ProductCardItem = ({ item, isPromo }: IProductCardItemProps) => {
  return (
    <div className="relative cursor-pointer transition-all duration-150 hover:scale-105">
      <div className=" flex justify-center items-center overflow-hidden">
        <Image
          width={1500}
          height={1500}
          alt={item.name}
          src={item.image}
          className="object-cover aspect-square"
        />
      </div>
      <div className="flex items-center justify-between gap-2 border border-gray-300 px-4 border-t-0 rounded-b-lg h-20 max-h-20">
        <p className="font-semibold">{item.name}</p>
        <div className="flex flex-col">
          <p className={`font-semibold ${isPromo && "line-through text-xs"}`}>
            {formatCurrency(item.price)}
          </p>
          {item.promotional_price && (
            <p className={`font-semibold`}>
              {formatCurrency(item.promotional_price)}
            </p>
          )}
        </div>
      </div>
      {item.discount_percentage && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-bl-lg">
          <span>{item.discount_percentage}% OFF</span>
        </div>
      )}
    </div>
  )
}
