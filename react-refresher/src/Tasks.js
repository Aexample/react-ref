import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const Tasks = props => {

    const List = props.list
    const ListUi = List.map(value=>{

       return  <TaskItem key={value} title={value} itemDelete={props.delete}  />
    }) 
    return (
        
        <ul  style={{
        width:'100vw',
        display : 'flex',
        justifyContent:'space-around',
        listStyle:'none'
        
    }}>
            {ListUi}
        </ul>
    );
};

Tasks.propTypes = {
    
};

export default Tasks;