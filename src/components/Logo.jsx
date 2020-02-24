import React from 'react';
import '../index.css';
import logo from './supremelogo.png';

function Logo() {
    return (
        <div className="logo">
            <img src={logo}  width='100%' alt="Logo"/>

        </div>
    );
}

export default Logo;
