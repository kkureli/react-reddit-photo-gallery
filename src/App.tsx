import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import PhotoDetail from "./pages/PhotoDetailPage/PhotoDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photo/:id" element={<PhotoDetail />} />
    </Routes>
  );
}

export default App;
