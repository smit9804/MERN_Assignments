import React, {useState} from 'react';


const Form = props => {

    const [form, setForm] = useState({
        name: "",
        kingdom: "",
        animalClass: ""
    });

    const nameValid = (name) =>{
        if(name.length <= 3) return false;
        return true;
    }
    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };



    return(
        <div>
            <div>
                <h1 class="yellow">Meow component</h1>

                <form>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name"onChange={onChangeHandler}></input>
                        {!nameValid(form.name) &&<span class="red">Name must be aat least 4 characters</span>}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="kingdom">Kingdom</label>
                        <input className="form-control" type="text" name="kingdom"onChange={onChangeHandler}></input>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="animalClass">Classification</label>
                        <input className="form-control" type="text" name="animalClass"onChange={onChangeHandler}></input>
                    </div>
                    <input class="greenbtn" type="submit" value="Add!"/>
                </form>
            </div>
        </div>
    )
}

export default Form;