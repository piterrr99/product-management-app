import { addApprovedElement, deleteReviewedElement, deleteUnreviewedElement, removeApprovedElement, reviewElements, setReviewedElements, setUnreviewedElements } from "./productsSlice"
import { closeDeleteItemModal, closeSubmitModal } from "../ui/uiSlice"
import { AppDispatch, RootState } from "@/lib/store";
import { ClientReviewedProduct, ClientUnreviewedProduct } from "@/interface-adapters/ProductAdapter";

export const startDeleting = ({
    productId,
}: {
    productId: string | undefined,
})=>{
    return (dispatch: AppDispatch, getState: ()=>RootState)=>{
			const { view } = getState().ui.deleteItemModal;
			const isReviewedView = view === 'reviewed'
			if(isReviewedView) {
				dispatch(deleteReviewedElement({productId}));
			} else {
				dispatch(deleteUnreviewedElement({productId}));
				dispatch(removeApprovedElement({productId}));
			};

			dispatch(closeDeleteItemModal());
			
			if(isReviewedView) {
				const totalReviewedProducts = localStorage.getItem('reviewed-products');
				const resultantReviewProducts = totalReviewedProducts 
					? JSON.parse(totalReviewedProducts).filter((product: ClientReviewedProduct) => product.id !== productId)
					: [];
				localStorage.setItem('reviewed-products', JSON.stringify(resultantReviewProducts));
				const { 
					reviewedProductsIndexes: {endIndex},
					reviewedProducts: auxProducts
				 } = getState().products;
				if(endIndex && endIndex <= resultantReviewProducts.length) {
					const reviewedProducts = auxProducts.concat(resultantReviewProducts[endIndex - 1]);
					dispatch(setReviewedElements({reviewedElements: reviewedProducts}))
				}
			} else {
				const { reviewedProducts } = getState().products;
				localStorage.setItem('unreviewed-products', JSON.stringify(reviewedProducts))
			}
    };
};

export const startSettingUnreviewedProducts = ({
	unreviewedElements
}: {
	unreviewedElements: ClientUnreviewedProduct[]
}) => {
	return (dispatch: AppDispatch, getState: ()=>RootState)=>{
		dispatch(setUnreviewedElements({unreviewedElements}));
		localStorage.setItem('unreviewed-products', JSON.stringify(unreviewedElements))
	};
};

export const startSettingReviewedProducts = ({
	
})

export const toggleCheck = ({
	productId,
	checked,
}: {
	productId: string,
	checked: boolean,
})=>{
	return (dispatch: AppDispatch, getState: ()=>RootState)=>{
		checked 
			? dispatch(addApprovedElement({productId}))
			: dispatch(removeApprovedElement({productId}));
	}
};

export const startReviewingElements = ()=>{
	return (dispatch: AppDispatch, getState: ()=>RootState)=>{
		const { approvedProducts, unreviewedProducts } = getState().products;
		const newElements = unreviewedProducts.map(product=>{
			const reviewedProduct: ClientReviewedProduct = {
				...product,
				status: approvedProducts.includes(product.id) ? 'approved' : 'rejected',
			};
			return reviewedProduct;
		});
		dispatch(reviewElements({newElements}));
		const { reviewedProducts } = getState().products;
		localStorage.setItem('reviewed-products', JSON.stringify(reviewedProducts));
		localStorage.setItem('unreviewed-products', '[]')
		dispatch(closeSubmitModal());
	}
};