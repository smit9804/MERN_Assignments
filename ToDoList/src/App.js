import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';
import Input from './components/Input';
import React, {useState} from 'react';

function App() {

  const [list, setList] = useState([]);

  const [task, setTask] = useState({
    name: "",
    isComplete: false
});

  return (
    <div className="App">
      <Input list={list} setList={setList}/>
      {list.map((task, index) => (
        <Task task={task} setList={setList} index={index} list={list} setTask={setTask}/>
      ))}
    </div>
  );
}

export default App;
