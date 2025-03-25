import { Dispatch, DispatchWithoutAction } from "react"
import { deleteReviewedElement, deleteUnreviewedElement } from "./productsSlice"
import { closeDeleteItemModal } from "../ui/uiSlice"

export const startDeleting = ({
    productId,
}: {
    productId: string | undefined,
})=>{
    return async(dispatch: any, getState: any)=>{
			const { view } = getState().ui.deleteItemModal;
			view === 'reviewed' 
				? dispatch(deleteReviewedElement({productId}))
				: dispatch(deleteUnreviewedElement({productId}))
			dispatch(closeDeleteItemModal())
    }
}