import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Detail = props => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            // .then(res => console.log(res.data))
            .then(res => setProduct(res.data.product))
            .catch(err => console.log("Error: you suck! ", err))
    }, [props.id])

    return (
        <div>
            <h1>Meow</h1>
            <div class="infoness">
                <h2 class="xtrablue" props={props}>{product.title}</h2>
                <h4 class="xtrablue">${product.price}</h4>
                <h4 class="xtrablue">{product.description}</h4>
                <br/>
                <br/>
                <Link to={"/api/products/edit/" + product._id} class="orangebtn">Edit</Link>
            </div>
            <Link to={"/api/products/"} class="indigobtn" >Back to Product Page</Link>
        </div>
    )
}

export default Detail;