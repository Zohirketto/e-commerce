import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    err: "",
    cart: {},
    quantity: 0
};

const commerceSlice = createSlice({
    name: "e-commerce",
    initialState,
    reducers: {
        addcart: (state, action) => {
            const { id } = action.payload;
            const product = state.data.find((elm) => elm.id === id);
            if (product) {
                state.cart = { ...state.cart, [id]: { ...product, quantity: (state.cart[id]?.quantity || 0) + 1 } };
                state.quantity += 1;
            }
        },
        removeFromcart: (state, action) => {
            const { id } = action.payload;
        
            if (state.cart[id]) {
                if (state.cart[id].quantity > 1) {
                    state.cart[id].quantity -= 1;
                } else {
                    delete state.cart[id];
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetch_produit.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.err = "";
            })
            .addCase(fetch_produit.pending, (state) => {
                state.data = [];
                state.loading = true;
                state.err = "";
            })
            .addCase(fetch_produit.rejected, (state, action) => {
                state.data = [];
                state.loading = false;
                state.err = action.payload;
            });
    }
});

export const fetch_produit = createAsyncThunk("produit/fetch_produit", async (__, thunk) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        return response.data;
    } catch (e) {
        return thunk.rejectWithValue(e.message);
    }
});

export const { addcart, removeFromcart } = commerceSlice.actions;
export default commerceSlice.reducer;