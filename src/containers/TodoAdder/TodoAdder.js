import React from 'react';
import './TodoForm.css';

const todoAdder = (props) => {
    return(
        <form onSubmit={props.submitProp}>
            <input className="itemInput" placeholder="Add a task..." value={props.value} onChange={props.onChange}/>
            <input className="itemAdd" type='submit' value='' />
        </form>
    );
}

export default todoAdder;