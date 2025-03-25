import { configureStore } from "@reduxjs/toolkit";

import ui from './features/ui/uiSlice';
import products from './features/products/productsSlice'

export const makeStore = ()=>{
    return configureStore({
        reducer: {
            ui,
            products,
        }
    });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']