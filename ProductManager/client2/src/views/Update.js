import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, navigate } from '@reach/router';
import Form from '../components/Form';

const Update = props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then (res=> {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products' + id, product)
            .then(res => console.log(res));
            navigate('/api/products')
    }
    return (
        <div>
            {loaded && (
                <Form 
                onSubmitProp={updateProduct} 
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
                />
            )}
            <Link to={'/api/products/'} class="indigobtn">Back to Product Page</Link>
        </div>
    )
}

export default Update;