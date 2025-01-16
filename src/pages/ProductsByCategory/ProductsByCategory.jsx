import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/CardProduct/ProductCard';
import './ProductsByCategory.css'

function ProductsByCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar os produtos:", error);
        setLoading(false);
      });
  }, [category]);

  const formatCategoryName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ");
  };

  if (loading) {
    return (
      <div className="message">
        <div className="loading-dots">
          <strong>Loading</strong>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    );
  }

  return (
    <div className='category'>
      <h1 className="category-title">{formatCategoryName(category)}</h1>
      <div className="container-product-category">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsByCategory;
