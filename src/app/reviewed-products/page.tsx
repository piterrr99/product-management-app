import { ReviewedCard } from "../components/ReviewedCard";

export default function Page() {
	return (
		<div className="p-6">
			<div className="mb-5">
				<h1 className="font-bold text-2xl">Productos Revisados</h1>
				<span className="font-light text-md text-gray-500">Productos que ya han sido marcados como aprobados o rechazados</span>
			</div>
			
			<ReviewedCard />
		</div>
	)
}