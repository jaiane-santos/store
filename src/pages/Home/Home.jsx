import { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';

import Slider from '../../components/Slider/Slider';
import CardCategories from '../../components/CardCategories/CardCategories';
import ProductCard from '../../components/CardProduct/ProductCard'; 

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

    if (error) {
        return <div className='message'>{error}</div>;
    }

    return (
        <>
          <Slider />
          <CardCategories />
        <div className='product-container'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />  
            ))}
        </div>
        </>
    );
}

export default Home;
