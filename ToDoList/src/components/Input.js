import React, {useState} from 'react';

const Input = props => {
    const {list, setList} = props;
    
    const [task, setTask] = useState({
        name: "",
        isComplete: false
    });

    const onChange = e => {
        setTask({...task, name: e.target.value });
    };

    const onClick = e => {
        e.preventDefault();
        setList([...list, task]);
        setTask({name: "", isComplete: false})
    };


    return (
        <form onSubmit={onClick}>
            <div className="container">
                <input 
                    onChange={onChange} 
                    type="text" 
                    name="task"
                    value={task.name} 
                    placeholder="What is your quest?">
                    
                </input>

                <br/>

                <input type="submit" class="greenbtn" value="Click Me MOOOOO!"/>
            </div>
        </form>
    )
}

export default Input;