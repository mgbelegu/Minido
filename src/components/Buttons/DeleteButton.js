import React from 'react';
import './Buttons.css';

const deleteButton = (props) => {
    return <button className="delete" onClick={props.onDelete}>&#10006;</button>
};

export default deleteButton;