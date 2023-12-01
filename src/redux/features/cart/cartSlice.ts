import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../../types/ProductsTypes";

interface CartItem extends ProductTypes {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingCartItem) {
        existingCartItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },

    removeItemFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItemQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity > 0 ? quantity : 0;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
