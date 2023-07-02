import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
