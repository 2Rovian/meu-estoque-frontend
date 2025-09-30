import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import HeaderComp from "./components/HeaderComp";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComp />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/produtos" element={<ProductsPage />}/>
          <Route path="/sobre" element={<AboutPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
