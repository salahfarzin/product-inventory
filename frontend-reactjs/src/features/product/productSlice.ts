import { createSlice } from '@reduxjs/toolkit';

interface ProductState {
    productList: any;
}

const initialState: ProductState = {
    productList: null,
};

const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductList(state, { payload }: any) {
            state.productList = payload;
        },
    },
});

export const { setProductList } = product.actions;
export default product.reducer;
