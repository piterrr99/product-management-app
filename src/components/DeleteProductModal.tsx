'use client'

import { deleteUnreviewedElement } from "@/lib/features/products/productsSlice";
import { startDeleting } from "@/lib/features/products/thunks";
import { closeDeleteItemModal } from "@/lib/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"


export const DeleteProductModal = () => {
  
	const dispatch = useAppDispatch();
	const { deleteItemModal: { itemId, productName } } = useAppSelector(state => state.ui)
	const handleCancel = ()=>{
		dispatch(closeDeleteItemModal())
	};

	const handleDelete = ()=>{
		dispatch(startDeleting({productId: itemId}))
	}

	return (
		<div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-slate-600 bg-opacity-20 z-40">
			<div className="bg-white opacity-100 max-w-[350px] sm:max-w-[1000000px] sm:w-[500px] z-20 rounded-lg p-6 relative">
				<h1 className="font-semibold text-xl mb-3">¿Borrar elemento?</h1>
				<div className="mb-6 text-sm text-gray-500">
					Esta acción eliminará permanentemente a <b>{productName}</b> de tu lista de productos. Su resultado no se puede deshacer.
				</div>
				<div className="flex justify-end space-x-3">
					<button onClick={handleCancel} className=" hover:bg-gray-100 font-bold text-sm w-20 py-3 border-[1px] border-gray-300 rounded-lg">Cancelar</button>
					<button onClick={handleDelete} className="bg-[#d32f2f] hover:bg-red-600 text-sm font-bold w-20 py-3 rounded-lg text-white">Borrar</button>
				</div>
			</div>
		</div>
  )
}
