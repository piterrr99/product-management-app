'use client'

import { openDetailsModal } from '@/lib/features/ui/uiSlice';
import { useAppDispatch } from '@/lib/hooks';
import InfoIcon from '@mui/icons-material/Info';

export const DetailsIcon = ({productId}: {productId: string}) => {

	const dispatch = useAppDispatch();
	const handleShowDetails = ()=>{
		dispatch(openDetailsModal({productId}))
	}

  return (
		<abbr title="Detalles del Producto">
			<button onClick={handleShowDetails}>
				<InfoIcon color='action' />
			</button>
		</abbr>
  )
}
