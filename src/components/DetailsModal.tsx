import Image from "next/image"
import CloseIcon from '@mui/icons-material/Close';
import { StatusBadge } from "./StatusBadge";

export const DetailsModal = ({
	productName,
	productId,
	productProvider,
	productImage,
	productDescription,
	productPrice,
	status,
}: {
	productName: string,
	productId: string,
	productProvider: string,
	productImage: string,
	productDescription: string,
	productPrice: number,
	status?: 'approved' | 'rejected',
}) => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-slate-600 bg-opacity-20 z-10">
			<div className="bg-white opacity-100 max-w-[350px] sm:max-w[100000px] sm:w-[500px] z-20 rounded-lg p-6 relative">
				<button className="absolute right-2 top-2">
					<CloseIcon />
				</button>
				<h1 className="text-xl font-bold mb-2">{productName}</h1>
				<div className="mb-3 flex space-x-4">
					<div className="font-light text-gray-500 text-sm">Proveedor: {productProvider}</div>
					{status && <StatusBadge status={status}/>}
				</div>
				<Image 
					src={productImage}
					alt="Imagen del producto"
					width={100}
					height={200}
					className="w-[100%] max-h-[200px] sm:max-h-[300px] rounded-md"
					priority
				/>
				
				<h3 className="font-medium text-sm text-gray-500 mt-3">Descripción</h3>
				<p>{productDescription}</p>

				<div className="mt-6 bg-gray-400 h-[0.5px] w-full bg-opacity-30"/>
				<div className="flex justify-between mt-6 items-center">
					<div className="font-semibold text-md">Price</div>
					<div className="font-bold text-2xl">${productPrice}</div>
				</div>
			</div>
    </div>
  )
}
