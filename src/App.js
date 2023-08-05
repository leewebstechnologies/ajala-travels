import Home from "./pages/Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import TourPackage from "./pages/TourPackage";
import DetailPackage from "./pages/DetailPackage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour-package" element={<TourPackage />} />
        <Route path="/tour-package/:tourPackageId" element={<DetailPackage />} />
      </Routes>
    </>
  );
}

export default App;
