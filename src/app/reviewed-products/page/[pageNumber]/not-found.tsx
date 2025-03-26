import Link from "next/link"

export default function NotFound(){
	return(
		<div className="flex-1 container mx-auto flex flex-col items-center justify-center p-4 md:p-6 text-center h-[80vh]">
			<div className="max-w-md space-y-6">
				<div className="space-y-2">
					<h1 className="text-4xl font-bold tracking-tight">404</h1>
					<h2 className="text-2xl font-semibold">Page Not Found</h2>
					<p className="text-muted-foreground">
						Lo sentimos, no pudimos encontrar la página que estabas buscando. Puede que la página haya sido movida, 
						eliminada o puede que nunca haya existido. 
					</p>
				</div>

				<div className="pt-4">
					<Link replace href="/reviewed-products/page/1">
						<button className="px-8 py-3 rounded-lg bg-black hover:bg-gray-950 text-white">
							Regresar a Productos Revisados
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}