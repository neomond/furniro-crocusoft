import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import { ProductTypes } from "../../../types/ProductsTypes";
import { prodUrl } from "./productsApi";
import { RootState } from "../../app/store";

interface ProductsState {
  products: ProductTypes[];
  searchResults: ProductTypes[];
  searchQuery: string;
  selectedProduct: ProductTypes | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  searchResults: [],
  searchQuery: "",
  selectedProduct: null,
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(`${prodUrl}/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<string>) => {
      state.selectedProduct =
        state.products.find((product) => product.id === action.payload) || null;
    },
    searchProductsByTitle: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.searchResults = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductTypes[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { selectProduct, searchProductsByTitle } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = createSelector(
  [(state: RootState) => state.products.products],
  (products) => products
);
