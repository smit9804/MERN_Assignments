import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setLoaded(true);
            });
    }, []);

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
    }

    
    return (
        <div>
            <Form onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr/>
            {loaded && <List setProducts={setProducts} products={products} />}
        </div>
    )
}

export default Main;