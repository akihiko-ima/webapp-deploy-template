import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Result from "./pages/Result";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
