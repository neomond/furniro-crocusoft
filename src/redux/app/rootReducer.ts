import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productsSlice";
import searchReducer from "../features/search/searchSlice";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
  products: productsReducer,
  search: searchReducer,
});

export default rootReducer;
