import React from 'react';
import computer from './images/computer.svg';
import optimize from './images/loan-blue.svg';
import responsive from './images/responsive-design-symbol-blue.svg';
import ux from './images/interactivity-blue.svg';
import design from './images/graphic-design-blue.svg';
import { Helmet } from 'react-helmet';
import './styles/css/dev.css';

class WebDevelopment extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div id="devPage">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Web Development </title>
                    <link rel="canonical" href="https://www.wemakeads.com/web-development"/>
                    <meta name="description" content="Need to have a online presence or improve your existing site? We build, update and maintain fully custom website." />
                </Helmet>
                <div className="whatTop" id="devTop">
                    <div className="whatIconHolder" id="devIconContainer">
                        <img className="whatIcon" id="devIcon" src={computer} alt="coding"/>
                    </div>
                    <h1 className="whatMainHeader">Web Development</h1>
                    <div id="devUnderline"></div>
                    <p className="whatMainPar">
                        We build and design responsive sites that are focused on the users and optimized for search engines. 
                        A website is often the first impression for new customers, so let us help you make a great first impression!
                    </p>
                </div>
                <div id="devMid">
                    <h2 className="devSubHeader">Our Focus</h2>
                    <div className="web-icon-container">
                        <div className="web-icon-holder">
                            <img src={optimize} className="web-icon" alt="optimizatize" />
                            <p className="web-icon-text"> Fast </p>
                        </div>
                        <div className="web-icon-holder">
                            <img src={responsive} className="web-icon" alt="responsive" />
                            <p className="web-icon-text"> Responsive </p>
                        </div>
                        <div className="web-icon-holder">
                            <img src={ux} className="web-icon" alt="User experience" />
                            <p className="web-icon-text"> Intuitive </p>
                        </div>
                        <div className="web-icon-holder">
                            <img src={design} className="web-icon" alt="graphic design" />
                            <p className="web-icon-text"> Design </p>
                        </div>
                    </div>
                    <p className="devPar">                           
                        We create an immersive user interface with an experience that's 
                        simple and pleasing to interact with. Our products are responsive 
                        giving users a consistent experience across all devices. Our products
                        effectively communicates it's functionality to the target audience.
                        We follow modern design trends that are innovative and elegant.
                        We've built web sites for a variety of businesses including 
                        education, healthcare, local television, and retail.
                    </p>
                </div>
                <div id="devBottom">
                    <h2 className="devSubHeader"> Recent Work </h2>
                    <div id="devSiteHolder">
                        <div className="siteContainer" id="local-huntsville">
                            <div className="details">
                                <div className="siteLink">
                                    <div className="siteHeader"> My Local Huntsville </div>
                                    <a href="https://www.mylocalhuntsville.com" className="siteButton"> Learn More </a>
                                </div>
                            </div>
                        </div>
                        <div className="siteContainer" id="localGrenada">
                            <div className="details">
                                <div className="siteLink">
                                    <div className="siteHeader">Local Grenada</div>
                                    <a href="https://www.localgrenada.com/" className="siteButton">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="siteContainer" id="ndori">
                            <div className="details">
                                <div className="siteLink">
                                    <div className="siteHeader">Ndori</div>
                                    <a href="http://www.ndori.org/" className="siteButton">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="siteContainer" id="bryant-farms">
                            <div className="details">
                                <div className="siteLink">
                                    <div className="siteHeader"> Bryant Farms </div>
                                    <a href="http://www.bryantfarmsbeef.com" className="siteButton"> Learn More </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default WebDevelopment;