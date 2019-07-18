import React from 'react';
import map from './images/map.png';
import { Helmet } from 'react-helmet';
import './styles/scss/contact.scss';

class Contact extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Contact Us | Whitfield Media </title>
                    <link rel="canonical" href="https://www.wemakeads.com/contact"/>
                    <meta name="description" content="If you have questions or want pricing for our services give us a call or send a email and we'll get back to you as soon as possible." />
                </Helmet>
                <div id="contact-page">
                    <h1 className="contactHeader">Call us today or send a message!</h1>
                    <p className="contactText">Our goal at Whitfield Media is to provide our customers with quality video production and advertising services. Give us a call today and let us see what we can do for you!</p>
                    <div id="formMapContainer">
                        <form id="form" action="https://formspree.io/charlie@cwhitfieldmedia.com" method="POST">
                            <div className="row">
                                <label htmlFor="form_name" className="form_label"> <i className="far fa-user"></i> </label>
                                <input type="text" name="name" className="input" placeholder="Name*" />
                            </div>
                            <div className="row">
                                <label htmlFor="form_email" className="form_label"> <i className="far fa-envelope"></i> </label>
                                <input type="text" name="email" className="input" placeholder="Email*" />
                            </div>
                            <div className="row">
                                <label htmlFor="form_company" className="form_label"> <i className="fas fa-briefcase"></i></label>
                                <input type="text" name="company" className="input" placeholder="Company" />
                            </div>
                            <div className="row">
                                <label htmlFor="form_number" className="form_label"> <i className="fas fa-phone"></i> </label>
                                <input type="tel" name="phone" className="input" placeholder="Phone Number" />
                            </div>
                            <div className="row">
                                <label htmlFor="form_message" className="form_label"> <i className="fas fa-envelope"></i> </label>
                                <input type="text" name="message" className="input" id="messageInput" placeholder="Message*" />
                            </div>
                            <div className="buttonContainer">
                                <button id="form-button"> <i className="far fa-paper-plane"></i> Send </button>
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
}

export default Contact