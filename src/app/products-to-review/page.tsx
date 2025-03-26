import { ProductAdapter } from "@/interface-adapters/ProductAdapter";
import { SubmitButton } from "@/components/SubmitButton";
import { UnreviewedList } from "@/components/UnreviewedList";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Productos por Revisar'
}

export default async function Page() {	
	
	// Dejo que se cachee la respuesta dado que a partir de ahora se usa el LocalStorage como BD.
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
			</div>
		</div>
		
	)
}