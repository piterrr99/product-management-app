'use client'

import { openDeleteItemModal } from '@/lib/features/ui/uiSlice';
import { useAppDispatch } from '@/lib/hooks';
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteButton = ({
	productId, 
	productName,
	view,
}: {
	productId: string, 
	productName: string,
	view: 'reviewed' | 'not-reviewed'
}) => {

	const dispatch = useAppDispatch();
	
	const handleDelete = ()=>{
		dispatch(openDeleteItemModal({productId, productName, view}));
	}

  return (
		<abbr title="Eliminar Producto">
			<button onClick={handleDelete}>
				<DeleteIcon color='error'/>
			</button>
		</abbr>
  )
}
