import React from 'react';
import './Header.css';
import logo from '../../Resources/logos/Group 1329.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav>
            <input type="checkbox" name="" id="check" />
            <label for="check" class="checkBtn"><i class='bx bx-menu'></i></label>
                <label htmlFor="logo" className='logo'><img src={logo} alt="" /></label>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                        <Link>Donation</Link>
                        <Link>Blog</Link>
                        <Link>Contact</Link>
                        
                    </li>
                    <Link to={'/register'}><button className='register'>Register</button></Link>
                    <Link to={'/admin'}><button className='admin'>Admin</button></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;