import './App.css';
import Tasks from './Tasks';

import { useState , useRef } from 'react';
function App() {

  const [taskList , changeTaskList] = useState([])
  const taskInput = useRef("")


  function  add() {

    alert("add")
  }

   function  deleteR() {

    alert("delete")
   }

  let Result = taskList.length>0 ? <Tasks list={taskList} add={add} delete={deleteR} /> : <p> no tasks</p>



  

function addTask() {

    changeTaskList(()=>{
 
    const newList = [...taskList]
    newList.push(taskInput.current.value)
    return newList
    })

  }

  return (
    <div className="App">
      
<div>
  <input type="text" ref={taskInput} placeholder="you're task here" />
  <button onClick={addTask}> add</button>
</div>

      <div className="result">  
        {Result}
      </div>
    </div>
  );
}


export default App;
