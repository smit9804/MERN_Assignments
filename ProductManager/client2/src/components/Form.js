import React, { useState } from 'react';
// import axios from 'axios';

const Form = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description})
        // axios.post('http://localhost:8000/api/products/new', {
        //     title,
        //     price,
        //     description
        // })
        // .then(res=>console.log(res))
        // .catch(err=>console.log(err))
    }


    return (
        <div class="blueness">
            <h1> From Form.js</h1>


            <form className="col" onSubmit={onSubmitHandler}>

                <div class="row sm-5">
                    <label class="form-label">Title:</label>
                    <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} class="form-control" placeholder="Title"/>

                </div>

                <div class="row md-3">
                    <label class="form-label">Price:</label>
                    <input value={price} type="text" onChange={(e) => setPrice(e.target.value)} class="form-control" placeholder="Price"/>

                </div>

                <div class="row md-3">
                    <label class="form-label">Description:</label>
                    <textarea value={description} class="form-control" onChange={(e) => setDescription(e.target.value)} rows="3"></textarea>

                </div>

                <input type="submit" class="greenbtn" value="Add Product"/>


            </form>
        </div>
    )
}

export default Form;