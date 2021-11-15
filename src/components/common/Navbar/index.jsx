import { Link } from 'react-router-dom';

import logo from '@/assets/img/logo_openbank.svg';

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <Link to="/">
                <img src={logo} className="navbar-logo" alt="logo" />
            </Link>
        </nav>
    );
};

export default Navbar;
