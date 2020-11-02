import React from 'react';
import Delete from '../Buttons/DeleteButton';
import Done from '../Buttons/DoneButton';
import './TodoItem.css';

class TodoItem extends React.Component{

    render(){
        return (
            <div className="itemDiv">
                <div
                contentEditable="true" 
                className="listItem"
                onChange={this.props.modifyItemInput}>{this.props.name}</div>
                <div>
                    <Done onDone={this.props.doneItem}/>
                    <Delete onDelete={this.props.deleteItem}/>
                </div>
            </div>
        );
    }
}
export default TodoItem;