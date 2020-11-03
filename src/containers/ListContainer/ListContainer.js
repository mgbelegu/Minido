import React from 'react';
import './ListContainer.css';

const container = (props) => {
    return <div className="ListContainer">{props.children}</div>;
}

export default container;