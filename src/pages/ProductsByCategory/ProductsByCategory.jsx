import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import axios from 'axios';

function ProductsByCategory() {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
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

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
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
  );
}

export default ProductsByCategory;
