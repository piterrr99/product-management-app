'use client'

import {openSubmitModal } from "@/lib/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

export const SubmitButton = () => {

	const dispatch = useAppDispatch();
	const { unreviewedProducts } = useAppSelector(state => state.products);
	const isProductsEmpty = unreviewedProducts.length === 0;
	
	const handleSubmit = ()=>{
		dispatch(openSubmitModal())
	}

  return (
    <div className={`flex ${!isProductsEmpty ? 'justify-end' : 'justify-between'}  border-[2px] border-t-0 mx-10 border-[#f4f4f5] rounded-lg p-6`}>
			{isProductsEmpty ? 
				<div>No hay productos para revisar</div> 
				: 
					<button 
						onClick={handleSubmit} 
						className="bg-black rounded-lg text-white py-2 px-5 hover:bg-slate-900"
					>
						Revisar
					</button>}
		</div>
  )
}
