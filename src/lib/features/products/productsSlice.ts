import { ClientReviewedProduct, ClientUnreviewedProduct } from "@/interface-adapters/ProductAdapter";
import { createSlice } from "@reduxjs/toolkit";

interface StateInterface {
	unreviewedProducts: ClientUnreviewedProduct[];
	reviewedProducts: ClientReviewedProduct[];
	approvedProducts: ClientUnreviewedProduct[];
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
			state.unreviewedProducts = state.unreviewedProducts.filter(product=>product.id !== payload.productId);
		},
		reviewElements: (state, {payload}: {payload: {newElements: ClientReviewedProduct[]}}) =>{
			payload.newElements.forEach(element=>{
				element.id = String(state.reviewedProducts.length + 1);
				state.reviewedProducts.push(element);		
			});
			state.unreviewedProducts = [];
		},
		setUnreviewedElements: (state, {payload}: {payload: {unreviewedElements: ClientUnreviewedProduct[]}})=>{
			state.unreviewedProducts = payload.unreviewedElements;
		},
		setReviewedElements: (state, {payload}: {payload: {reviewedElements: ClientReviewedProduct[]}})=>{
			state.reviewedProducts = payload.reviewedElements;
		},
		addApprovedElement: (state, {payload}: {payload: {approvedElement: ClientUnreviewedProduct}})=>{
			state.approvedProducts.push(payload.approvedElement);
		},
		removeApprovedElement: (state, {payload}: {payload: {approvedElement: ClientUnreviewedProduct}})=>{
			state.approvedProducts = state.approvedProducts.filter(product=>product.id !== payload.approvedElement.id)
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