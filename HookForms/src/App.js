import './App.css';
import React, { useState } from 'react';
import Form from "./components/Form";
import Result from "./components/Result"

function App() {
  
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password: "",
    confirmPassword: "",
    submitted: false
});
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState}/>
      <Result data={state}/>
    </div>
  );
}

export default App;
