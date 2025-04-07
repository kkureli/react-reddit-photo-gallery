import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import PhotoDetail from "./pages/PhotoDetailPage/PhotoDetailPage";
import Init from "./components/Init/Init";
import Stars from "./components/Stars/Stars";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Stars />
      <Init />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<PhotoDetail />} />
      </Routes>
    </Provider>
  );
}

export default App;
