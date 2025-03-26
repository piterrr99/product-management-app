'use client'

import { ClientReviewedProduct } from "@/interface-adapters/ProductAdapter"
import { ReviewedCard } from "./ReviewedCard"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setReviewedElements, setReviewedPageInfo } from "@/lib/features/products/productsSlice";
import { useEffect } from "react";
import { DeleteProductModal } from "./DeleteProductModal";
import { DetailsModal } from "./DetailsModal";
import { notFound, useSearchParams } from "next/navigation";
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
		!initialFetchMade && localStorage.setItem('reviewed-fetch', 'true');
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
			<div className="flex flex-wrap mb-10">
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
			<div className="flex justify-center">
				{pagesArray.map(page=>(
					// <button key={`page-${page}`} className="border-gray-300 border-[1px] rounded-md h-10 w-10 ml-5 hover:bg-slate-100">
					// 	{page}
					// </button>	
					<PaginationButton 
						page={page}
						currentPage={pageNumber}
						key={`page-${page}`}
					/>
				))}
				{/* <button className="border-gray-300 border-[1px] rounded-md h-10 w-10 ml-5 hover:bg-slate-100">
					1
				</button>
				<button className="border-gray-300 border-[1px] rounded-md h-10 w-10 ml-3 hover:bg-slate-100">
					2
				</button>
				<button className="border-gray-300 border-[1px] bg-black text-white rounded-md h-10 w-10 ml-3 hover:bg-gray-900">
					3
				</button> */}
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
