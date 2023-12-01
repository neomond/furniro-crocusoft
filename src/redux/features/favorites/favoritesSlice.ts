import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../../types/ProductsTypes";

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async (): Promise<ProductTypes[]> => {
    const response = await fetch("/api/favorites");
    if (!response.ok) {
      throw new Error("Failed to fetch favorites");
    }
    return response.json();
  }
);

interface FavoritesState {
  items: ProductTypes[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FavoritesState = {
  items: [],
  status: "idle",
  error: null,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<ProductTypes>) {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push({ ...action.payload, isLiked: true });
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchFavorites.fulfilled,
        (state, action: PayloadAction<ProductTypes[]>) => {
          state.status = "succeeded";

          state.items = action.payload.map((item) => ({
            ...item,
            isLiked: true,
          }));
        }
      )
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch favorites";
      });
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
