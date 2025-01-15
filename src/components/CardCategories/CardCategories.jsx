import { Card, CardBody, CardTitle } from "reactstrap";
import { FaBox, FaTshirt, FaLaptop, FaGem } from "react-icons/fa";
import "./CardCategories.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { GiLargeDress } from "react-icons/gi";

function CardCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar categorias:", error);
      });
  }, []);

 
  const getCategoryIcon = (category) => {
    switch (category) {
      case "electronics":
        return <FaLaptop />;
      case "jewelery":
        return <FaGem />;
      case "men's clothing":
        return <FaTshirt />;
      case "women's clothing":
        return <GiLargeDress   />;
      default:
        return <FaBox />;
    }
  };

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <Card key={index} className="categories-card">
          <CardBody>
            <div className="icon-container">{getCategoryIcon(category)}</div>
            <CardTitle tag="h5">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CardTitle>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default CardCategories;
