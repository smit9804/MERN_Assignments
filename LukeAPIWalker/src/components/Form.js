import React, {useState} from 'react';
import axios from 'axios';

const Form = () => {
    const [type, setType ] = useState("people");
    const [id, setId] = useState();
    const [result, setResult] = useState({});


    const getData = event => {
        event.preventDefault();
        axios
        .get("https://swapi.dev/api/" + type + "/" + id + "/")
        .then (response => {
            console.log(type)
            console.log(id)
            setResult(response.data)
        })
        .catch(err => console.log(err));
    }

    return (
        <div class="ou">
            <h1 class="red">Luke APIWalker</h1>
            <div class="desert">
                <form onSubmit={getData}>
                    <select onChange={event => setType(event.target.value)}>
                        <option value="people">People</option>
                        <option value="starships">Starships</option>
                    </select>
                    <p>ID:
                        <input onChange={event => setId(event.target.value)} type="number"></input>
                    </p>
                    <input class="greenbtn" type="submit" value="Search"/>
                </form>
            </div>
            {
                type === "people"
                ?
                <div class="purple">
                    <h2>Name: {result.name}</h2>
                    <h3>Height: {result.height} cm.</h3>
                    <h3>Hair Color: {result.hair_color}</h3>
                    <h3>Home World: {result.homeworld}</h3>
                </div>
                :""
            }
            {
                type==="starships"
                ?
                <div class="indigo">
                    <h2>Name: {result.name}</h2>
                    <h3>Cost: {result.cost_in_credits}</h3>
                </div>
                :""
            }
        </div>
    )
}

export default Form;