import Image from "next/image"
import { DeleteButton } from "./DeleteButton"
import { DetailsIcon } from "./DetailsIcon"
import { StatusBadge } from "./StatusBadge"


export const ReviewedCard = ({
	status,
	productImage,
	productName,
	productPrice,
}: {
	status: 'approved' | 'rejected',
	productImage: string,
	productName: string,
	productPrice: number,
}) => {
  return (
    <div className="ml-5 mt-2 h-[320px] w-64 border-[1px] rounded-lg relative">
			<StatusBadge status={status} absolute />
			<Image 
				src={productImage}
				alt="Imagen del producto"
				width={100}
				height={200}
				className="w-[100%] h-[200px] rounded-t-lg rounded-tr-lg"
				priority
			/>
			<div className="px-3">
				<h1 className="mt-3 text-lg font-semibold">{productName}</h1>
				<h3 className="text-xl font-bold mt-2 mb-4">${productPrice}</h3>
			</div>
			<div className="flex space-x-2 justify-end absolute bottom-2 right-2">
				<DetailsIcon />
				<DeleteButton />
			</div>
    </div>
  )
}
