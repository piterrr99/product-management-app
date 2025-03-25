import { DeleteProductModal } from "../components/DeleteProductModal";
import { DetailsModal } from "../components/DetailsModal";
import { ProductElementList } from "../components/ProductElementList";

const productsArray = [
	{
		productName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta suscipit consequuntur odio! A animi praesentium, distinctio asperiores perspiciatis dolor autem unde cum aliquam, amet, eos maiores deserunt saepe. Animi.",
		productId: "1"
	},
	{
		productName: "Producto 2.",
		productId: "2"
	},
	{
		productName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta suscipit consequuntur odio! A animi praesentium, distinctio asperiores perspiciatis dolor autem unde cum aliquam, amet, eos maiores deserunt saepe. Animi.",
		productId: "3"
	},
	{
		productName: "Producto 2.",
		productId: "2"
	},
	{
		productName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta suscipit consequuntur odio! A animi praesentium, distinctio asperiores perspiciatis dolor autem unde cum aliquam, amet, eos maiores deserunt saepe. Animi.",
		productId: "3"
	},
	{
		productName: "Producto 2.",
		productId: "2"
	},
	{
		productName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta suscipit consequuntur odio! A animi praesentium, distinctio asperiores perspiciatis dolor autem unde cum aliquam, amet, eos maiores deserunt saepe. Animi.",
		productId: "3"
	},
];

export default function Page() {	

	return(
		<>
			<div className="border-[2px] mx-10 border-[#f4f4f5] rounded-lg p-6">
				<h1 className="text-2xl font-bold mb-6">Lista de Productos</h1>
				<div className="mb-2 text-gray-500 text-sm">Marque los productos que desee aprobar. El resto serán rechazados.</div>
				<div>
					{productsArray.map((product) => (
						<ProductElementList
							productName={product.productName}
							productId={product.productId}
							key={product.productId}
						/>
					))}
				</div>
			</div>
			<div className="flex justify-end border-[2px] border-t-0 mx-10 border-[#f4f4f5] rounded-lg p-6">
					<button className="bg-black rounded-lg text-white py-2 px-5 hover:bg-slate-900">Submit</button>
			</div>
			{/* <DetailsModal /> */}
			{/* <DeleteProductModal /> */}
		</>
	)
}