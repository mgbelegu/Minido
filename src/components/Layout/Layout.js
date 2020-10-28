import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Navigation from '../Navigation/Navigation';

const layout = (props) => (
    <Aux>
        <main className="Content">
            <Navigation />
            {props.children}
        </main>
    </Aux>
);

export default layout;