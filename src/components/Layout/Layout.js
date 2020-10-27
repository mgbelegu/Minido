import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <main className="Content">
            <h1>Minido - Minimalist to do app</h1>
            {props.children}
        </main>
    </Aux>
);

export default layout;