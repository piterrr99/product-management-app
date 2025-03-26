'use client'

import { ClientReviewedProduct } from "@/interface-adapters/ProductAdapter"
import { ReviewedCard } from "./ReviewedCard"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setReviewedElements, setReviewedPageInfo } from "@/lib/features/products/productsSlice";
import { useEffect } from "react";
import { DeleteProductModal } from "./DeleteProductModal";
import { DetailsModal } from "./DetailsModal";
import { notFound } from "next/navigation";
import { getPageInfo } from "@/helpers/helpers";
import { PaginationButton } from "./PaginationButton";


export const ReviewedList = ({
	reviewedProducts: reviewedElements, pageNumber,
}: {
	reviewedProducts: ClientReviewedProduct[],
	pageNumber: string,
}) => {

	const { detailsModal, deleteItemModal} = useAppSelector(state => state.ui);
	const { reviewedProducts, reviewedProductsIndexes: {totalPages}} = useAppSelector(state => state.products);
	const dispatch = useAppDispatch();
	const pagesArray = Array.from({length: totalPages as number}, (_, i)=> i+1)

	useEffect(() => {
		const initialFetchMade = localStorage.getItem('reviewed-fetch');
		const storageElements = localStorage.getItem('reviewed-products');
		const finalElements =  storageElements
			? initialFetchMade 
				? JSON.parse(storageElements)
				: JSON.parse(storageElements).concat(reviewedElements)
			: reviewedElements;
		if(!initialFetchMade) {
			localStorage.setItem('reviewed-fetch', 'true');
		};
		const { 
			isValid, 
			pageProducts, 
			startIndex, 
			endIndex,
			totalPages,
		} = getPageInfo(pageNumber, finalElements);
		if(!isValid) {
			return notFound();
		};
		dispatch(setReviewedElements({reviewedElements: pageProducts}))
		dispatch(setReviewedPageInfo({startIndex, endIndex, totalPages}));
		localStorage.setItem('reviewed-products', JSON.stringify(finalElements));
	}, [])
	
	
	return (
		<>
			<div className="flex justify-center sm:justify-normal flex-wrap mb-10">
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
			</div>
			{reviewedProducts && reviewedProducts.length === 0 && (
				<div className="flex justify-center items-center h-[500px]">No hay productos revisados</div>
			)}
			<div className="flex justify-center flex-wrap">
				<div className="flex justify-start flex-wrap">
				{pagesArray.map(page=>(
					<PaginationButton 
						page={page}
						currentPage={pageNumber}
						key={`page-${page}`}
					/>
				))}
				</div>
			</div>
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
