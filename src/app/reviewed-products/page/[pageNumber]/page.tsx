import { ProductAdapter } from "@/interface-adapters/ProductAdapter";
import { ReviewedList } from "@/components/ReviewedList";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Productos Revisados'
}

export default async function Page(props: {params: Promise<{pageNumber: string}>}) {
	const params = await props.params;
	const pageNumber = params.pageNumber;

	// Dejo que se cachee la respuesta dado que a partir de ahora se usa el LocalStorage como BD.
	const response = await fetch('https://67e0cdfe58cc6bf78522f1bd.mockapi.io/api/v1/reviewed');
	const apiReviewedProducts = await response.json();
	const reviewedProducts = ProductAdapter.adaptReviewed(apiReviewedProducts);

	return (
		<div className="p-6">
			<div className="mb-5">
				<h1 className="font-bold text-2xl">Productos Revisados</h1>
				<span className="font-light text-md text-gray-500">Productos que ya han sido marcados como aprobados o rechazados</span>
			</div>
			<div>	
				<ReviewedList
					reviewedProducts={reviewedProducts}
					pageNumber={pageNumber}
				/>
			</div>
		</div>
	)
}