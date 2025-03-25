import { ProductAdapter } from "@/interface-adapters/ProductAdapter";
import { ReviewedCard } from "../../components/ReviewedCard";

export default async function Page() {

	const response = await fetch('https://67e0cdfe58cc6bf78522f1bd.mockapi.io/api/v1/reviewed');
	const apiReviewedProducts = await response.json();
	const reviewedProducts = ProductAdapter.adaptReviewed(apiReviewedProducts);

	return (
		<div className="p-6">
			<div className="mb-5">
				<h1 className="font-bold text-2xl">Productos Revisados</h1>
				<span className="font-light text-md text-gray-500">Productos que ya han sido marcados como aprobados o rechazados</span>
			</div>
			<div className="flex flex-wrap">
				{reviewedProducts.map(product=>(
						<ReviewedCard 
							productImage={product.productImage}
							productName={product.productName}
							status={product.status}
							productPrice={product.productPrice}
						/>
				))}
			</div>
		</div>
	)
}