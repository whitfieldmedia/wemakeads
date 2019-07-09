import React from 'react';
import map from './images/map.png';
import './styles/scss/contact.scss';

function Contact() {
    return (
        <div>
            <div id="contact-page">
                <h1 className="contactHeader">Call us today or send a message!</h1>
                <p className="contactText">Our goal at Whitfield Media is to provide our customers with quality video production and advertising services. Give us a call today and let us see what we can do for you!</p>
                <div id="formMapContainer">
                    <form id="form" action="https://formspree.io/charlie@cwhitfieldmedia.com" method="POST">
                        <div className="row">
                            <div className="column">
                                <label htmlFor="form_name" className="form-label">Name *</label>
                                <input type="text" name="name" className="input" placeholder="Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <label htmlFor="form_email" className="form-label">Email *</label>
                                <input type="text" className="input" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <label htmlFor="form_subject" className="form-label">Subject *</label>
                                <input type="text" className="input" placeholder="Subject" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <label htmlFor="form_message" className="form-label">Message *</label>
                                <input type="text" className="input" id="messageInput" placeholder="How can we help?" />
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button id="form-button"> Send </button>
                        </div>
                    </form>
                    <div className="right">
                        <a href="tel:6628091975" className="number">
                            (662) 809-1975
                        </a>
                        <div className="address">
                            <a className="addressLink" href="https://www.google.com/maps/place/699+Salem+Church+Rd,+Grenada,+MS+38901/@33.7790081,-89.86811,17z/data=!3m1!4b1!4m5!3m4!1s0x8881d2bec894332d:0xb960fa5e488b745!8m2!3d33.7790037!4d-89.8659213">
                                699 Salem Church Rd, Grenada Ms
                                <div id="map">
                                    <img className="mapImg" src={map} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact