import React from 'react';

const Task = props => {
    const { task, index, list, setList, setTask } = props;

    
    const onDeleteHandler = (index) => {
        setList([...list.slice(0, index), ...list.slice(index+1)])
    }

    const onCheck = (e) => {
        e.preventDefault();
        setTask({ isComplete:true})
        props.setTask.isComplete = true;
    };

    return (
        <div className="container">
            <div class="ou1">
                <h1>{props.task.name}</h1>
                <label htmlFor="checkbox">Completed</label>
                <input onCheck={onCheck} type="checkbox" name=""/>
                <button onClick={onDeleteHandler} class="redbtn">X</button>
            </div>
        </div>

    )
}

export default Task;

