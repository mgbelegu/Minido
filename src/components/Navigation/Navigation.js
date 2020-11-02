import React from 'react';
import './Navigation.css';
import minidoLogo from '../../assets/images/Minido.png';

const navigation = () => (
    <div className="Header">
        <img src={minidoLogo} alt="Minido Logo"/>
        <h3 className="title">MINIDO</h3>
    </div>
);

export default navigation;