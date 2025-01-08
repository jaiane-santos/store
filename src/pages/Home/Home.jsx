import { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';

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
        <div className='container'>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
