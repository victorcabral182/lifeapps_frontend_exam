import { IProduct } from "@/types"
import { formatCurrency } from "@/utils"
import Image from "next/image"
import { DiscountFlag } from "../DiscountFlag/DiscountFlag"

interface IProductCardItemProps {
  item: IProduct
  isPromo: boolean
  onClick: VoidFunction
  hideExtraInfo?: boolean
}

export const ProductCardItem = ({
  item,
  isPromo,
  onClick,
  hideExtraInfo = false,
}: IProductCardItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative transition-all duration-150 ${
        !hideExtraInfo
          ? "hover:scale-105 cursor-pointer rounded-b-lg rounded-t-sm"
          : "rounded-lg"
      } shadow-xl overflow-hidden w-full h-full lg:h-fit xl:h-full`}
    >
      <DiscountFlag discountPercentage={item?.discount_percentage} />
      <div className="flex justify-center items-center w-full">
        <Image
          width={1500}
          height={1500}
          alt={item.name}
          src={item.image}
          className="object-cover aspect-square w-full"
        />
      </div>
      {!hideExtraInfo && (
        <div className="flex items-center justify-between gap-2 border border-gray-300 px-2 sm:px-4 border-t-0 rounded-b-lg h-[53px] py-2 sm:py-4">
          <p className="font-semibold text-sm md:text-base">{item.name}</p>
          <div className="flex flex-col">
            <p className={`font-semibold ${isPromo && "line-through text-xs"}`}>
              {formatCurrency(item.price)}
            </p>
            {item.promotional_price && (
              <p className="font-semibold text-sm md:text-base">
                {formatCurrency(item.promotional_price)}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
