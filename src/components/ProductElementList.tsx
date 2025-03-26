'use client'

import { DeleteButton } from './DeleteButton';
import { DetailsIcon } from './DetailsIcon';

import '../app/styles/checkbox.css';
import { useAppDispatch } from '@/lib/hooks';
import { toggleCheck } from '@/lib/features/products/thunks'

export const ProductElementList = ({productName, productId}: {productName: string, productId: string}) => {
	
	const dispatch = useAppDispatch();
	
	const handleCheckboxToggle = (e: any)=>{
		const checked = e.target.checked;
		console.log({checked})
		dispatch(toggleCheck({productId: productId, checked}))
	};
	
	return(
		<div className="flex flex-col items-center border-[2px] border-[#f4f4f5] rounded-lg p-2 mb-5">
			<label className="checkbox-container self-start">
				<input onChange={handleCheckboxToggle} type="checkbox" />
				<span className="checkmark"></span>
				<span className='font-medium'>{productName}</span>
			</label>
			<div className='self-end space-x-2'>
				<DetailsIcon productId={productId} />
				<DeleteButton view='not-reviewed' productId={productId} productName={productName}/>
			</div>
		</div>
	)
}