'use client'

import { ClientUnreviewedProduct } from "@/interface-adapters/ProductAdapter"
import { ProductElementList } from "./ProductElementList"
import { useAppSelector } from "@/lib/hooks"
import { DetailsModal } from "./DetailsModal"
import { SubmitRevisionModal } from "./SubmitRevisionModal"
import { DeleteProductModal } from "./DeleteProductModal"

export const UnreviewedList = ({unreviewedProducts}: {unreviewedProducts: ClientUnreviewedProduct[]}) => {
	const { detailsModal, submitModal, deleteItemModal } = useAppSelector(state => state.ui);
  
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
