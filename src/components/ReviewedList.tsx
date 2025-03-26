'use client'

import { ClientReviewedProduct } from "@/interface-adapters/ProductAdapter"
import { ReviewedCard } from "./ReviewedCard"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setReviewedElements } from "@/lib/features/products/productsSlice";
import { useEffect } from "react";
import { DeleteProductModal } from "./DeleteProductModal";
import { DetailsModal } from "./DetailsModal";


export const ReviewedList = ({reviewedProducts: reviewedElements}: {reviewedProducts: ClientReviewedProduct[]}) => {

	const { detailsModal, deleteItemModal} = useAppSelector(state => state.ui);
	const { reviewedProducts} = useAppSelector(state => state.products);
	const dispatch = useAppDispatch();
	useEffect(() => {
		const initialFetchMade = localStorage.getItem('reviewed-fetch');
		const storageElements = localStorage.getItem('reviewed-products');
		const finalElements =  storageElements
			? initialFetchMade 
				? JSON.parse(storageElements)
				: JSON.parse(storageElements).concat(reviewedElements)
			: reviewedElements;
		!initialFetchMade && localStorage.setItem('reviewed-fetch', 'true');
		console.log({finalElements})
		dispatch(setReviewedElements({reviewedElements: finalElements}))
		localStorage.setItem('reviewed-products', JSON.stringify(finalElements))
	}, [])
	
	
	return (
		<>
			{reviewedProducts.map(product=>(
				<ReviewedCard
					productImage={product.productImage}
					productName={product.productName}
					status={product.status}
					productPrice={product.productPrice}
					productId={product.id}
					key={product.id}
				/>
			))}
			{deleteItemModal.isOpen && 
				<DeleteProductModal />
			}
			{detailsModal.isOpen && 
				<DetailsModal 
					products={reviewedProducts}
					productId={detailsModal.itemId}
				/>
			}
		</>
	)
}
