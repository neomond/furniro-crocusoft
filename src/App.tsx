import React, { FC, lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import { ProtectedRoute } from "./pages/ProtectedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));

const HeaderComponent = memo(
  React.lazy(() => import("./components/reusable/HeaderComponent"))
);
const FooterComponent = memo(
  React.lazy(() => import("./components/reusable/FooterComponent"))
);

const App: FC = () => {
  return (
    <AnimatePresence mode="wait">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        {/* <Route
          path="/protected-route"
          element={
            <ProtectedRoute isAuthenticated={userIsAuthenticated}>
              <ProtectedComponent />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
      <FooterComponent />
    </AnimatePresence>
  );
};

export default App;
