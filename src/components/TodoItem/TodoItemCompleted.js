import React from 'react';
import Delete from '../Buttons/DeleteButton';
import './TodoItem.css';

const todoItemCompleted = (props) => {
        return (
            <div className="itemDiv">
                <input className="listItem" value={props.name} readOnly/>
                <div>
                    <Delete onDelete={props.deleteItem}/>
                </div>
            </div>
            
        );
}

export default todoItemCompleted;