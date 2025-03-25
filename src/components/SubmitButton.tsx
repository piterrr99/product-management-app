'use client'

import {openSubmitModal } from "@/lib/features/ui/uiSlice";
import { useAppDispatch } from "@/lib/hooks"

export const SubmitButton = () => {

	const dispatch = useAppDispatch();
	
	const handleSubmit = ()=>{
		dispatch(openSubmitModal())
	}

  return (
    <div className="flex justify-end border-[2px] border-t-0 mx-10 border-[#f4f4f5] rounded-lg p-6">
			<button onClick={handleSubmit} className="bg-black rounded-lg text-white py-2 px-5 hover:bg-slate-900">Revisar</button>
		</div>
  )
}
