'use client'

import { ClientUnreviewedProduct } from "@/interface-adapters/ProductAdapter"
import { ProductElementList } from "./ProductElementList"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { DetailsModal } from "./DetailsModal"
import { SubmitRevisionModal } from "./SubmitRevisionModal"
import { DeleteProductModal } from "./DeleteProductModal"
import { useEffect } from "react"
import { setUnreviewedElements } from "@/lib/features/products/productsSlice"

export const UnreviewedList = ({unreviewedProducts: unreviewedElements}: {unreviewedProducts: ClientUnreviewedProduct[]}) => {
	const { detailsModal, submitModal, deleteItemModal} = useAppSelector(state => state.ui);
	const { unreviewedProducts } = useAppSelector(state => state.products);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setUnreviewedElements({unreviewedElements}))
	}, [])
	
  
	return (
		<>
			<div>
				{unreviewedProducts.map((product) => (
					<ProductElementList
						productName={product.productName}
						productId={product.id}
						key={product.id}
					/>
				))}
			</div>
			{detailsModal.isOpen && 
			<DetailsModal 
				productName={unreviewedProducts[0].productName}
				productDescription={unreviewedProducts[0].productDescription}
				productId={unreviewedProducts[0].id}
				productImage={unreviewedProducts[0].productImage}
				productPrice={unreviewedProducts[0].productPrice}
				productProvider={unreviewedProducts[0].productProvider}
			/>}
			{submitModal.isOpen &&
			<SubmitRevisionModal />
			}
			{deleteItemModal.isOpen &&
			<DeleteProductModal />
			}
		</>
  )
}
