'use client'

import { openDeleteItemModal } from '@/lib/features/ui/uiSlice';
import { useAppDispatch } from '@/lib/hooks';
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteButton = () => {

	const dispatch = useAppDispatch();
	
	const handleDelete = ()=>{
		dispatch(openDeleteItemModal({productId: '1'}));
	}

  return (
		<abbr title="Eliminar Producto">
			<button onClick={handleDelete}>
				<DeleteIcon color='error'/>
			</button>
		</abbr>
  )
}
