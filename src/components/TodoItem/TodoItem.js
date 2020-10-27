import React from 'react';
import Delete from '../Buttons/DeleteButton';
import Done from '../Buttons/DoneButton';
import './TodoItem.css';

const todoItem = (props) => {
        return (
            <div className="itemDiv">
                <input className="listItem" value={props.name} onChange={props.modifyItemInput}/>
                <div>
                    <Done onDone={props.doneItem}/>
                    <Delete onDelete={props.deleteItem}/>
                </div>
            </div>
            
        );
}

export default todoItem;