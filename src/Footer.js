import React from 'react';
import fb from './images/facebook-logo.svg';
import email from './images/mail-black-envelope-symbol.svg';
import './styles/css/footer.css';

function Footer() {
    return (
        <div id="footerContainer">         
            <a href="https://www.facebook.com/wemakeadvertisements/">
                <img id="facebookFooter" src={fb} alt="Facebook Logo"/>
            </a>
            <a href="mailto:charlie@cwhitfieldmedia.com">
                <img id="mailFooter" src={email} alt="Email Logo"/>
            </a>
        </div>
    )
}

export default Footer;