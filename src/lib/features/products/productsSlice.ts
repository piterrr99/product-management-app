import { ClientReviewedProduct, ClientUnreviewedProduct } from "@/interface-adapters/ProductAdapter";
import { createSlice } from "@reduxjs/toolkit";

interface StateInterface {
	unreviewedProducts: ClientUnreviewedProduct[];
	reviewedProducts: ClientReviewedProduct[];
	approvedProducts: string[];
}

const initialState: StateInterface = {
	unreviewedProducts: [],
	reviewedProducts: [],
	approvedProducts: [],
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
} = productsSlice.actions;
export default productsSlice.reducer;