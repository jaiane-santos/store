import { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';

import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import Slider from '../../components/Slider/Slider';
import CardCategories from '../../components/CardCategories/CardCategories';

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function allProducts() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
            setError('Erro ao carregar os produtos');
            setLoading(false);
        }
    }

    useEffect(() => {
        allProducts();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
          <Slider />
          <CardCategories />
        <div className='product-container'>
            {products.map((product) => (
                <Card key={product.id} className="product-card">
                    <CardImg  top width="100%" src={product.image} alt={product.title} />
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

export default Home;
