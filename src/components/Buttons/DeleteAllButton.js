import React from 'react';
import './Buttons.css';

const deleteAllButton = (props) => {
    return <button className="deleteAll" onClick={props.clearAll}>-</button>
};

export default deleteAllButton;