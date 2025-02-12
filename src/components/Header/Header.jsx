import { useState, useEffect } from 'react';
import axios from 'axios';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(response.data);
      })
  }, []);

  return (
    <div className="container-header">
       <h1>Store</h1>
      <ul className={`container-list`}>
        <li className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            Category ▼
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <li key={index} className="dropdown-item">
                  <Link to={`/category/${category}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </li>
              ))
            ) : (
              <li className="dropdown-item">Loanding...</li>
            )}
          </ul>
          )}
        </li>
        <li><FaShoppingCart /></li>
        <li><FaUserCircle /></li>
      </ul>
    </div>
  );
}

export default Header;
