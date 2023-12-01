import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/app/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import ScrollToTop from "./animations/ScrollToTop.tsx";
import ShopLoadingComponent from "./components/reusable/ShopLoadingComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Suspense fallback={<ShopLoadingComponent />}>
      <ScrollToTop />
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </Suspense>
  </Router>
);
