import React from 'react';
import { Link } from 'react-router-dom';
import './styles/css/nav.css';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            class: 'closed',
            class2: 'toggle-closed',
            dropdown: 'dropdown-closed',
            isClicked: false,
            isClicked2: false,
        }
    }
    handleClick = () => {
        if(!this.state.isClicked) {
            this.setState({
                isClicked: true,
                class: 'open',
                class2: 'toggle-open'
            })
        } else {
            this.setState({
                isClicked: false,
                class: 'closed',
                class2: 'toggle-closed'
            })
        }
    }
    handleDropdown = () => {
        if(!this.state.isClicked2) {
            this.setState({
                isClicked2: true,
                dropdown: 'dropdown-open'
            })
        } else {
            this.setState({
                isClicked2: false,
                dropdown: 'dropdown-closed'
            })
        }
    }
    handleClose = () => {
        this.setState({
            isClicked: false,
            isClicked2: false,
            class: 'closed',
            class2: 'toggle-closed',
            dropdown: 'dropdown-closed'
        })
    }
    render() { 
        return (
            <div>
                <header className="navbar nav-down" id="navbar">
                    <ul className="main-nav" id="js-menu">
                        <li className="nav-link">
                            <Link className="nav-links" id="home-link" to="/"> Whitfield Media </Link>
                        </li>
                        <li className="dropdown">
                            <div className="dropbtn" id="dropdown-button" onClick={this.handleDropdown}> WHAT WE DO <i className="fas fa-caret-down"></i>  </div>
                            <div className="dropdown-content" id="dropdown-content">
                                <Link className="dropdown-link" id="marketing-link" to="/digital-marketing"> DIGITAL MARKETING </Link>
                                <Link className="dropdown-link" id="design-link" to="/graphic-design"> GRAPHIC DESIGN </Link>
                                <Link className="dropdown-link" id="production-link" to="/video-production">VIDEO PRODUCTION</Link>
                                <Link className="dropdown-link" id="dev-link" to="/web-development"> WEB DEVELOPMENT </Link>
                                <Link className="dropdown-link" id="billboard-link" to="/billboards"> BILLBOARDS </Link>
                            </div>
                        </li>               
                        <li className="nav-link">
                            <Link className="nav-links" id="gallery-link" to="/video-gallery"> VIDEO GALLERY </Link>
                        </li>               
                        <li className="nav-link">
                            <Link className="nav-links" id="hotel-link" to="/hotels">HOTELS</Link>
                        </li>
                        <li className="nav-link">
                            <Link className="nav-links" id="blog-link" to="/blog">BLOG</Link>
                        </li>
                        <li className="nav-link">
                            <Link className="nav-links" id="team-link" to="/our-team">OUR TEAM</Link>
                        </li>
                        <li className="nav-link">
                            <Link className="nav-links" id="contact-link" to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </header>
                <header className="navbar2 nav-down2" style={{ transform: `translate(0, ${this.state.slide})`, transition: 'transform 200ms linear'}}>
                    <span className={this.state.class2} onClick={this.handleClick}> {!this.state.isClicked ? <i id="open" className="fas fa-bars"></i>: null }  </span>
                    <Link className="logo-holder2" to="/" onClick={this.handleClose}>
                        <h1 className="nav-header"> Whitfield Media </h1>
                    </Link>
                    <ul className={this.state.class}>
                        <li onClick={this.handleClose}>
                            <p className="nav-x"> X </p>
                        </li>
                        <li className="nav-link" onClick={this.handleClose}>
                            <Link onClick={this.handleClose} className="nav-links" to="/"> HOME </Link>
                        </li>
                        <li className="drowdown">
                            <div className="dropbtn" onClick={this.handleDropdown}> WHAT WE DO <i className="fas fa-caret-down"></i> </div>
                            <div className={this.state.dropdown}>
                                <Link onClick={this.handleClose} className="dropdown-link" id="marketing-link" to="/digital-marketing"> DIGITAL MARKETING </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" id="design-link" to="/graphic-design"> GRAPHIC DESIGN </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" id="production-link" to="/video-production">VIDEO PRODUCTION</Link>
                                <Link onClick={this.handleClose} className="dropdown-link" id="dev-link" to="/web-development"> WEB DEVELOPMENT </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" id="billboard-link" to="/billboards"> BILLBOARDS </Link>
                            </div>
                        </li>
                        <li className="nav-link" onClick={this.handleClose}>
                            <Link onClick={this.handleClose} className="nav-links" to="/video-gallery"> VIDEO GALLERY </Link>
                        </li>
                        <li className="nav-link" onClick={this.handleClose}>
                            <Link onClick={this.handleClose} className="nav-links" to="/hotels"> HOTELS </Link>
                        </li>
                        <li className="nav-link" onClick={this.handleClose}>
                            <Link onClick={this.handleClose} className="nav-links" to="/blog"> BLOG </Link>
                        </li>
                        <li className="nav-link" onClick={this.handleClose}>
                            <Link onClick={this.handleClose} className="nav-links" to="/our-team"> OUR TEAM </Link>
                        </li>
                        <li className="nav-link" onClick={this.handleClose}>
                            <Link onClick={this.handleClose} className="nav-links" to="/contact"> CONTACT </Link>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Nav;