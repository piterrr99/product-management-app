import { ProductAdapter } from "@/interface-adapters/ProductAdapter";
import { DeleteProductModal } from "../../components/DeleteProductModal";
import { DetailsModal } from "../../components/DetailsModal";
import { ProductElementList } from "../../components/ProductElementList";
import { SubmitRevisionModal } from "../../components/SubmitRevisionModal";
import { SubmitButton } from "@/components/SubmitButton";
import { UnreviewedList } from "@/components/UnreviewedList";

export default async function Page() {

	const response = await fetch('https://67e0cdfe58cc6bf78522f1bd.mockapi.io/api/v1/not-reviewed');
	const apiUnreviewedProducts = await response.json();
	const unreviewedProducts = ProductAdapter.adaptUnreviewed(apiUnreviewedProducts);

	return(
		<div className="flex justify-center">
			<div className="max-w-[800px]">
				<div className="border-[2px] mx-10 border-[#f4f4f5] rounded-lg p-6">
					<h1 className="text-2xl font-bold mb-6">Listado de Productos</h1>
					<div className="mb-2 text-gray-500 text-sm">Marque los productos que desee aprobar. El resto serán rechazados.</div>
					<UnreviewedList unreviewedProducts={unreviewedProducts} />
				</div>
				<SubmitButton />
				{/* <DetailsModal 
					productName={unreviewedProducts[1].productName}
					productDescription={unreviewedProducts[1].productDescription}
					productId={unreviewedProducts[1].id}
					productImage={unreviewedProducts[1].productImage}
					productPrice={unreviewedProducts[1].productPrice}
					productProvider={unreviewedProducts[1].productProvider}
				/> */}
				{/* <DeleteProductModal /> */}
				{/* <SubmitRevisionModal /> */}
			</div>
		</div>
		
	)
}