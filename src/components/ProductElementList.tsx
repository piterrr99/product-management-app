import { DeleteButton } from './DeleteButton';
import { DetailsIcon } from './DetailsIcon';

import '../app/styles/checkbox.css';

export const ProductElementList = ({productName, productId}: {productName: string, productId: string}) => {
	return(
		<div className="flex flex-col items-center border-[2px] border-[#f4f4f5] rounded-lg p-2 mb-5">
			<label className="checkbox-container self-start">
				<input type="checkbox" />
				<span className="checkmark"></span>
				<span className='font-medium'>{productName}</span>
			</label>
			<div className='self-end space-x-2'>
				<DetailsIcon />
				<DeleteButton />
			</div>
		</div>

	)
}