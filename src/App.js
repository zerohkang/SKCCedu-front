import Test from "./pages/Test";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/checkout" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
