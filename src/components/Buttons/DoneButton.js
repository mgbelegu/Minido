import React from 'react';
import './Buttons.css';

const doneButton = (props) => {
    return <button className="done" onClick={props.onDone}></button>
};

export default doneButton;