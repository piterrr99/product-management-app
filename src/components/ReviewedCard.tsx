import Image from "next/image"
import { DeleteButton } from "./DeleteButton"
import { DetailsIcon } from "./DetailsIcon"
import { StatusBadge } from "./StatusBadge"


export const ReviewedCard = ({
	status,
	productImage,
	productName,
	productPrice,
	productId,
}: {
	status: 'approved' | 'rejected',
	productImage: string,
	productName: string,
	productPrice: number,
	productId: string,
}) => {
  return (
    <div className="ml-5 mt-2 h-[320px] w-64 border-[1px] rounded-lg relative">
			<StatusBadge status={status} absolute />
			<div className="relative w-full h-[200px]">
				<Image 
					src={productImage}
					alt="Imagen del producto"
					className="rounded-t-lg rounded-tr-lg"
					sizes="255px"
					priority
					fill	
				/>
			</div>
			<div className="px-3">
				<h1 className="mt-3 text-lg font-semibold">{productName}</h1>
				<h3 className="text-xl font-bold mt-2 mb-4">${productPrice}</h3>
			</div>
			<div className="flex space-x-2 justify-end absolute bottom-2 right-2">
				<DetailsIcon />
				<DeleteButton view="reviewed" productId={productId} productName={productName}/>
			</div>
    </div>
  )
}
