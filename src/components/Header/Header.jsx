import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Fetch categories from API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Erro ao carregar categorias:', error));
  }, []);

  return (
    <div className="container-header">
      <h1>Store</h1>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`container-list ${menuOpen ? 'show-menu' : ''}`}>
        <li className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            Categoria ▼
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <li key={index} className="dropdown-item">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </li>
                ))
              ) : (
                <li className="dropdown-item">Carregando...</li>
              )}
            </ul>
          )}
        </li>
        <li>Editar Produto</li>
        <li>Carrinho</li>
      </ul>
    </div>
  );
}

export default Header;
