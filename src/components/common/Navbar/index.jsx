import React from 'react';

import logo from '@/assets/img/logo_openbank.svg';

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <img src={logo} className="navbar-logo" alt="logo" />
        </nav>
    );
};

export default Navbar;
