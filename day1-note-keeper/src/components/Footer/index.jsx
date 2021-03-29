import React from 'react';
import './style.scss';

const currentDate = new Date();
let year = currentDate.getFullYear();

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Copyright © {year}</p>
        </footer>
    );
}

export default Footer;


