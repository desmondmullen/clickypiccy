import React from 'react';
import logo from '../logo.svg';
import '../components/components.css';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} className='App-logo' alt='logo' /><em>ClickyPiccy</em> is an exercise in React &bull; &copy; 2019 <a
                href='https://desmondmullen.com' target='_blank' rel='noopener noreferrer'>desmondmullen.com</a> &bull; <a href='https://github.com/desmondmullen/clickypiccy' target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
        </footer>
    )
};

export default Footer;
