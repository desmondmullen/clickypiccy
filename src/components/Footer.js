import React from 'react';
import logo from '../logo.svg';
import '../components/components.css';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} className="App-logo" alt="logo" />"ClickyPiccy" is an exercise in React &bull; &copy; 2019 <a
                href='https://desmondmullen.com' target='_blank'>desmondmullen.com</a> &bull; <a href='https://github.com/desmondmullen/newsnippets' target='_blank'>GitHub Repository</a>
        </footer>
    )
};

export default Footer;
