import React from 'react';
import Delete from '../Buttons/DeleteButton';
import './TodoItem.css';

const todoItemCompleted = (props) => {
        return (
            <div className="itemDiv">
                <li className="listItemCompleted">{props.name}</li> 
                <div>
                    <Delete onDelete={props.deleteItem}/>
                </div>
            </div>
            
        );
}

export default todoItemCompleted;