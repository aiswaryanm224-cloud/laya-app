import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth.jsx";
import Home from "./components/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;