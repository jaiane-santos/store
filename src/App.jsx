import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProductsByCategory from "./pages/ProductsByCategory/ProductsByCategory";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes> 
          <Route exact path="/" element={<Home />} /> 
          <Route path="/category/:category" element={<ProductsByCategory />} /> 
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
