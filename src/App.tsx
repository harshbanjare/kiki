import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
function App() {
  return (
    <Routes>
      <Route path="/kiki/">
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product" element={<Product />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}
export default App;
