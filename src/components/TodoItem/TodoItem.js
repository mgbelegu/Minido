import React from 'react';
import Delete from '../Buttons/DeleteButton';
import Done from '../Buttons/DoneButton';
import './TodoItem.css';

const todoItem = (props) => {
        return (
            <div className="itemDiv">
                <li className="listItem" onChange={props.modifyItemInput}>{props.name}</li>
                <div>
                    <Done onDone={props.doneItem}/>
                    <Delete onDelete={props.deleteItem}/>
                </div>
            </div>
            
        );
}

export default todoItem;