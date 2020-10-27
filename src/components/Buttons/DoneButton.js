import React from 'react';
import './Buttons.css';

const doneButton = (props) => {
    return <button className="done" onClick={props.onDone}>&#10004;</button>
};

export default doneButton;