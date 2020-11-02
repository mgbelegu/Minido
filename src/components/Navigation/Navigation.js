import React from 'react';
import './Navigation.css';
import minidoLogo from '../../assets/images/Minido.png';

const navigation = (props) => (
    <div className="Header">
        <div className="hamburger" onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        
        <div className="logoGroup">
            <img src={minidoLogo}/>
        </div>
    </div>
);

export default navigation;