export const DiscountFlag = ({
  discountPercentage,
}: {
  discountPercentage: number
}) => {
  return (
    <>
      {discountPercentage && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 sm:px-4 py-1 sm:py-2 rounded-bl-lg">
          <span>{discountPercentage}% OFF</span>
        </div>
      )}
    </>
  )
}
