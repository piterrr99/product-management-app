'use client'

import Image from "next/image"
import CloseIcon from '@mui/icons-material/Close';
import { StatusBadge } from "./StatusBadge";
import { useAppDispatch } from "@/lib/hooks";
import { closeDetailsModal } from "@/lib/features/ui/uiSlice";
import { ClientReviewedProduct, ClientUnreviewedProduct } from "@/interface-adapters/ProductAdapter";
import { useEffect, useState } from "react";

export const DetailsModal = ({
	products,
	productId,
}: {
	products: ClientUnreviewedProduct[] | ClientReviewedProduct[],
	productId: string | undefined,
}) => {

	const dispatch = useAppDispatch();
	const handleClose = ()=>{
		dispatch(closeDetailsModal())
	};

	const [product, setProduct] = useState<ClientUnreviewedProduct | ClientReviewedProduct | undefined>(undefined)

	useEffect(() => {
		const product = products.filter(product=>product.id === productId);
		setProduct(product[0]);
	}, [productId]);

	const isReviewed = (product: ClientUnreviewedProduct | ClientReviewedProduct): product is ClientReviewedProduct => {
		return 'status' in product
	}

  return (
		product &&(
    <div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-slate-600 bg-opacity-20 z-40">
			<div className="bg-white opacity-100 max-w-[350px] sm:max-w[100000px] sm:w-[500px] z-20 rounded-lg p-6 relative">
				<button onClick={handleClose} className="absolute right-2 top-2">
					<CloseIcon />
				</button>
				<h1 className="text-xl font-bold mb-2">{product.productName}</h1>
				<div className="mb-3 flex space-x-4">
					<div className="font-light text-gray-500 text-sm">Proveedor: {product.productProvider}</div>
					{isReviewed(product) && <StatusBadge status={product.status}/>}
				</div>
				<Image 
					src={product.productImage}
					alt="Imagen del producto"
					width={100}
					height={200}
					className="w-[100%] max-h-[200px] sm:max-h-[300px] rounded-md"
					priority
				/>
				
				<h3 className="font-medium text-sm text-gray-500 mt-3">Descripción</h3>
				<p>{product.productDescription}</p>

				<div className="mt-6 bg-gray-400 h-[0.5px] w-full bg-opacity-30"/>
				<div className="flex justify-between mt-6 items-center">
					<div className="font-semibold text-md">Price</div>
					<div className="font-bold text-2xl">${product.productPrice}</div>
				</div>
			</div>
    </div>)
  )
}
