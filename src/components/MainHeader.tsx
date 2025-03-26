'use client'
import { useRouter } from "next/router"
import { NavItem } from "./NavItem"

export const MainHeader = ()=>{
	
	const handleResetDemo = ()=>{
		localStorage.clear();
		window.location.reload();
	}
	return (

		<header className="bg-[#18181b] text-[#fafafa] p-4 shadow-md mb-8">
			<div className="flex justify-between items-center">
				<button onClick={handleResetDemo} className="text-black bg-white rounded-lg py-2 px-4 mr-5 hover:bg-gray-200">
					Reiniciar demo
				</button>
				<nav className="flex gap-6">
					<NavItem 
						href="/products-to-review"
					>
						Productos por Revisar
					</NavItem>
					<NavItem
						href="/reviewed-products"
					>
						Productos Revisados
					</NavItem>
				</nav>
			</div>
		</header>
	)
}
