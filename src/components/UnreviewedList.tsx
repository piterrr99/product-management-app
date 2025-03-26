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
		const initialFetchMade = localStorage.getItem('unreviewed-fetch');
		const storageElements = localStorage.getItem('unreviewed-products');
		const finalElements = storageElements && initialFetchMade ? JSON.parse(storageElements) : unreviewedElements;
		!initialFetchMade && localStorage.setItem('unreviewed-fetch', 'true');
		dispatch(setUnreviewedElements({unreviewedElements: finalElements}));
		localStorage.setItem('unreviewed-products', JSON.stringify(finalElements));
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
				productId={detailsModal.itemId}
				products={unreviewedProducts}
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
