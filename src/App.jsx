import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProductsByCategory from "./pages/ProductsByCategory/ProductsByCategory";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes> 
          <Route exact path="/" element={<Home />} /> 
          <Route path="/category/:category" element={<ProductsByCategory />} /> {/* Inclua o parâmetro de categoria */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
