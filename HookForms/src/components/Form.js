import React, { useState } from 'react';


const Form = props =>{
    
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password: "",
        confirmPassword: "",
        // submitted: false
    });


    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    const createUser = (e) => {
        console.log("Made it to Create User")
        e.preventDefault();
        console.log(state.firstName);
        const newUser = {firstName:state.firstName, lastName:state.lastName, email:state.email, password:state.password};
        console.log("Welcome", newUser.firstName, newUser.lastName, newUser.email, newUser.password);
        // submitted = true;
    }
    
    
    return(
        <div id="container">
            <form onSubmit={ createUser } class="desert">
                <label htmlFor="firstName">First Name:</label>
                <input onChange={onChange} type="text" name="firstName"></input>
                {state.firstName.length < 2 && state.firstName.length !=0 ? <p class="red">First Name must be at least 2 characters</p>:<p></p>}
                
                <label htmlFor="lastName">Last Name:</label>
                <input onChange={onChange} type="text" name="lastName"></input>
                {state.lastName.length < 2 && state.lastName.length !=0 ? <p class="red">Last Name must be at least 2 characters</p>:<p></p>}

                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" name="email"></input>
                {state.email.length < 2 && state.email.length !=0 ? <p class="red">Email must be at least 5 characters</p>:<p></p>}

                <label htmlFor="password">Password:</label>
                <input onChange={onChange} type="text" name="password"></input>
                {state.password.length < 2 && state.password.length !=0 ? <p class="red">Password must be at least 8 characters</p>:<p></p>}

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input onChange={onChange} type="text" name="confirmPassword"></input>
                {state.password == state.confirmPassword  ? <p></p> :<p class="red">Passwords must match</p>}

                <input type="submit" class="greenbtn"/>
            </form>
        </div> 
    );
};
export default Form;