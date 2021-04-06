import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

//Displays the original 151. Because that is all that matter, really.

function App() {
//deconstructor 
  const [ pokemon, setPokemon ] = useState([]);

    const onClickHandler = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => {
        return response.json();
    }).then(response => {
        setPokemon(response.results);
    }).catch(err=>{
        console.log(err);
    });
            //end of the code for using a button
    }
    useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => {setPokemon(response.data.results)})
    }, [])                                    //IMPORTANT!
            //end of the code for auto-generation
  return (
    <div>
            <button class="greenbtn" onClick={onClickHandler}>Fetch Pokemon</button>
            <ul>
                {
                    pokemon.map( (poke, index) =>
                    <li key={index}>{poke.name}</li>)
                }
            </ul>
        </div>
  );
}

export default App;
