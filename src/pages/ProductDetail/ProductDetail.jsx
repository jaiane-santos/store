import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar os detalhes do produto:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className='message'>
        <div className="loading-dots">
          <strong>Loading</strong>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">$ {product.price}</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart-button">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
