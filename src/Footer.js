import React from 'react';
import fb from './images/f_logo_RGB-White_58.png';
import email from './images/email_logo.svg';
import './styles/css/footer.css';

function Footer() {
    return (
        <div id="footerContainer">      
            <div className="footer-row">
                <a href="https://www.facebook.com/wemakeadvertisements/" className="footer-text">
                    <img id="facebookFooter" src={fb} alt="Facebook Logo"/>
                </a>
                <a href="mailto:charlie@cwhitfieldmedia.com">
                    <img id="mailFooter" src={email} alt="Email Logo"/>
                </a>  
            </div>   
            <div className="footer-row">
                <a href="tel:6628091975" className="footer-text">
                    (662) 809-1975
                </a>
            </div>
            <div className="footer-row">
                <a href="google.com/maps/place/Whitfield+Media/@33.7790037,-89.8681153,17z/data=!3m1!4b1!4m5!3m4!1s0x8881d2e87306efc3:0x808c7653eee5f894!8m2!3d33.7790037!4d-89.8659213" target="_blank" rel="noopener noreferrer" className="footer-text">
                    699 Salem Church Rd, Grenada, Ms 38901
                </a>
            </div>
        </div>
    )
}

export default Footer;