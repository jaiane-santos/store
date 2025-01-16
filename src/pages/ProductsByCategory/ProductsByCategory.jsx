import { useParams } from 'react-router-dom'; 
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import axios from 'axios';
import './ProductsByCategory.css'; 
import { useEffect, useState } from 'react';

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

  return (
    <>
      <h1 className="category-title">{formatCategoryName(category)}</h1> 
      <div className="container-product-category">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <CardImg top width="100%" src={product.image} alt={product.title} />
            <CardBody>
              <CardTitle tag="h5">{product.title}</CardTitle>
              <CardText><strong>${product.price}</strong></CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ProductsByCategory;
