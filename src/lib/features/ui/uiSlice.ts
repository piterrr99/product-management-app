import { createSlice } from "@reduxjs/toolkit";

interface ItemModal {
	isOpen: boolean;
	itemId: string | undefined;
};

interface DeleteModal extends ItemModal{
	productName: string;
	view: '' | 'reviewed' | 'not-reviewed'
};

interface StateInterface {
	deleteItemModal: DeleteModal;
	detailsModal: ItemModal;
	submitModal: {isOpen: boolean};
}

const initialState: StateInterface = {
  deleteItemModal:{
		isOpen: false,
		itemId: undefined,
		productName: '',
		view: '',
	},
	detailsModal: {
		isOpen: false,
		itemId: undefined
	},
	submitModal: {
		isOpen: false,
	}
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		openDeleteItemModal: (state, {payload }: {
			payload: {
				productId: string | undefined, 
				productName: string,
				view: 'reviewed' | 'not-reviewed'
			},
		})=> {
			state.deleteItemModal.itemId = payload.productId;
			state.deleteItemModal.isOpen = true;
			state.deleteItemModal.productName = payload.productName;
			state.deleteItemModal.view = payload.view;
		},
		closeDeleteItemModal: (state)=> {
			state.deleteItemModal.isOpen = false;
			state.deleteItemModal.itemId = undefined;
		},
		openDetailsModal: (state, {payload}: {payload: {productId: string | undefined}})=>{
			state.detailsModal.isOpen = true;
			state.detailsModal.itemId = payload.productId
		},
		closeDetailsModal: (state)=>{
			state.detailsModal.isOpen = false;
			state.detailsModal.itemId = undefined;
		},
		openSubmitModal: (state)=>{
			state.submitModal.isOpen = true;
		},
		closeSubmitModal: (state)=>{
			state.submitModal.isOpen = false;
		}
	}
});

export const {
	openDeleteItemModal,
	openDetailsModal,
	openSubmitModal,
	closeDeleteItemModal,
	closeDetailsModal,
	closeSubmitModal,
} = uiSlice.actions;

export default uiSlice.reducer;