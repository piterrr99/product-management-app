'use client'

import { openDetailsModal } from '@/lib/features/ui/uiSlice';
import { useAppDispatch } from '@/lib/hooks';
import InfoIcon from '@mui/icons-material/Info';

export const DetailsIcon = () => {

	const dispatch = useAppDispatch();
	const handleShowDetails = ()=>{
		dispatch(openDetailsModal({productId: '1'}))
	}

  return (
		<abbr title="Detalles del Producto">
			<button onClick={handleShowDetails}>
				<InfoIcon color='action' />
			</button>
		</abbr>
  )
}
