import React, { useState } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import PhotoDetail from "./pages/PhotoDetailPage/PhotoDetailPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import Init from "./components/Init/Init";
import Stars from "./components/Stars/Stars";
import { store } from "./store/store";

function App() {
  const [initialized, setInitialized] = useState(false);

  if (!initialized) {
    return (
      <Provider store={store}>
        <Init onInitDone={() => setInitialized(true)} />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Stars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<PhotoDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
