import { ClientReviewedProduct, ClientUnreviewedProduct } from "@/interface-adapters/ProductAdapter";
import { createSlice } from "@reduxjs/toolkit";

interface StateInterface {
	unreviewedProducts: ClientUnreviewedProduct[];
	reviewedProducts: ClientReviewedProduct[];
	approvedProducts: string[];
	reviewedProductsIndexes: {
		startIndex: undefined | number;
		endIndex: undefined | number;
		totalPages: undefined | number;
	}
}

const initialState: StateInterface = {
	unreviewedProducts: [],
	reviewedProducts: [],
	approvedProducts: [],
	reviewedProductsIndexes: {
		startIndex: undefined,
		endIndex: undefined,
		totalPages: 1,
	}
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		deleteReviewedElement: (state, {payload}: {payload: {productId: string | undefined}})=>{
			state.reviewedProducts = state.reviewedProducts.filter(product=>product.id !== payload.productId);
		},
		deleteUnreviewedElement: (state, {payload}: {payload: {productId: string | undefined}})=>{
			state.unreviewedProducts = state.unreviewedProducts.filter(product=>product.id !== payload.productId)
		},
		reviewElements: (state, {payload}: {payload: {newElements: ClientReviewedProduct[]}}) =>{
			payload.newElements.forEach(element=>{
				element.id = String(state.reviewedProducts.length + 31);
				state.reviewedProducts.unshift(element);
			});
			state.unreviewedProducts = [];
			state.approvedProducts = [];
		},
		setUnreviewedElements: (state, {payload}: {payload: {unreviewedElements: ClientUnreviewedProduct[]}})=>{
			state.unreviewedProducts = payload.unreviewedElements;
		},
		setReviewedElements: (state, {payload}: {payload: {reviewedElements: ClientReviewedProduct[]}})=>{
			state.reviewedProducts = payload.reviewedElements;
		},
		addApprovedElement: (state, {payload}: {payload: {productId: string | undefined}})=>{
			payload.productId && state.approvedProducts.push(payload.productId) ;
		},
		removeApprovedElement: (state, {payload}: {payload: {productId: string | undefined}})=>{
			state.approvedProducts = state.approvedProducts.filter(productId=>productId !== payload.productId)
		},
		setReviewedPageInfo: (state, {payload}: {
			payload: {startIndex: number | undefined, endIndex: number | undefined, totalPages: number | undefined}
		})=>{
			state.reviewedProductsIndexes.startIndex = payload.startIndex;
			state.reviewedProductsIndexes.endIndex = payload.endIndex;
			state.reviewedProductsIndexes.totalPages = payload.totalPages;
		}
	}
});

export const {
	deleteReviewedElement,
	deleteUnreviewedElement,
	setReviewedElements,
	setUnreviewedElements,
	addApprovedElement,
	removeApprovedElement,
	reviewElements,
	setReviewedPageInfo,
} = productsSlice.actions;
export default productsSlice.reducer;