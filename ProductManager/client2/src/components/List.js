import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const List = (props) => {

    // const [products, setProducts] = useState([]);
    const {products, setProducts} = props;


    const deleteTheProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then (res => setProducts(res.data.products))
            .catch (err => console.log(err))
    }, [products])
    return (
        <div>
            <div className="container">
                <table class="table">
                    <thead class="indigo">
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            products.map((product, index) => {
                            return (
                                <tr key={index} class="indigo">
                                    <td><Link to={"/api/products/" + product._id} class="beach">{product.title}</Link></td>
                                    <td>${product.price}</td>
                                    <td>{product.description}</td>
                                    <td><Link to={"/api/products/edit/" + product._id} class="orangebtn">Edit</Link> | <button class="redbtn" onClick={ (e) => {deleteTheProduct(product._id)}}>Delete</button> </td>
                                </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default List;