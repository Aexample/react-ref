import React, { useState } from 'react';

const TaskItem = (props) => {

    const [isDone , setTaskStatus] = useState(false)

    const textStyle = {

        textDecoration:'line-through'
    }

     const buttonStyle = {

        display:'none'
    }    
    
    function itemDone(){

        setTaskStatus(true)
    }

    return (
     
    <li>

        <div style={{

            width:'200px',
            height:'200px',
            border :'5px solid red',
            marginTop:'2rem'

        }}>

            <h3 style={isDone ? textStyle : null}>  {props.title}</h3>
            <button style={isDone ? buttonStyle : null} onClick={itemDone}  className="bg-success"> Done</button>
            <button onClick={props.itemDelete} className="bg-danger"> Delete</button>

        </div>



    </li>

    );
};

export default TaskItem;