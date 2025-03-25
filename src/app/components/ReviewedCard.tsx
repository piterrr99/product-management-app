import Image from "next/image"
import { DeleteButton } from "./DeleteButton"
import { DetailsIcon } from "./DetailsIcon"
import { StatusBadge } from "./StatusBadge"


export const ReviewedCard = () => {
  return (
    <div className="w-64 border-[1px] rounded-lg relative">
			<StatusBadge />
			<Image 
				src='seed/MBIDnE3g/591/3754?blur=1'
				alt="Imagen del producto"
				width={100}
				height={200}
				className="w-[100%] max-h-[200px] sm:max-h-[200px] rounded-t-lg rounded-tr-lg"
				priority
			/>
			<div className="px-3">
				<h1 className="mt-3 text-lg font-semibold">Smart Fitness Tracker</h1>
				<h3 className="text-xl font-bold mt-2 mb-4">$89.95</h3>
			</div>
			<div className="flex space-x-2 justify-end absolute bottom-2 right-2">
				<DetailsIcon />
				<DeleteButton />
			</div>
    </div>
  )
}
