import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../../types/ProductsTypes";

interface ProductsState {
  products: ProductTypes[];
  searchQuery: string;
  searchResults: ProductTypes[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  searchQuery: "",
  searchResults: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProductsByTitle: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.searchResults = state.products.filter((product) =>
        product.title.toLowerCase().startsWith(action.payload.toLowerCase())
      );
    },
  },
});

export const { searchProductsByTitle } = productsSlice.actions;
export default productsSlice.reducer;
