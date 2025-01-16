/* eslint-disable react/prop-types */
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <Card className="product-card">
        <CardImg top width="100%" src={product.image} alt={product.title} />
        <CardBody>
          <CardTitle tag="h5">{product.title}</CardTitle>
          <CardText><strong>${product.price}</strong></CardText>
        </CardBody>
      </Card>
    </Link>
  );
}

export default ProductCard;
