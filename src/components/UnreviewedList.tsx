'use client'

import { ClientUnreviewedProduct } from "@/interface-adapters/ProductAdapter"
import { ProductElementList } from "./ProductElementList"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { DetailsModal } from "./DetailsModal"
import { SubmitRevisionModal } from "./SubmitRevisionModal"
import { DeleteProductModal } from "./DeleteProductModal"
import { useEffect } from "react"
import { startSettingUnreviewedProducts } from "@/lib/features/products/thunks"

export const UnreviewedList = ({unreviewedProducts: unreviewedElements}: {unreviewedProducts: ClientUnreviewedProduct[]}) => {
	const { detailsModal, submitModal, deleteItemModal} = useAppSelector(state => state.ui);
	const { unreviewedProducts } = useAppSelector(state => state.products);

	const dispatch = useAppDispatch();

	useEffect(() => {
		const initialFetchMade = localStorage.getItem('unreviewed-fetch');
		const storageElements = localStorage.getItem('unreviewed-products');
		const finalElements = storageElements && initialFetchMade ? JSON.parse(storageElements) : unreviewedElements;
		if (!initialFetchMade) { 
			localStorage.setItem('unreviewed-fetch', 'true');
		};
		dispatch(startSettingUnreviewedProducts({unreviewedElements: finalElements}));
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
