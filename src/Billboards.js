import React from 'react';
import billboard2 from './images/billboard2Toyota.jpg';
import billboard3 from './images/billboard3Sayle.jpg';
import billboard4 from './images/billboard4GrenadaBadBoys.jpg';
import billboardIcon from './images/billboard-blue.svg';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Helmet } from 'react-helmet';
import './styles/css/billboards.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Billboards extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Billboards | Whitfield Media </title>
                    <link rel="canonical" href="https://www.wemakeads.com/billboards"/>
                    <meta name="description" content="Trying to find the best way to get brand recognition or a promotion seen? Getting a billboard could be the solution for you." />
                </Helmet>
                <div id="billboardContainer">
                    <div id="billboardHolder">
                        <div className="whatIconHolder" id="billboardLogoContainer">
                            <img className="whatIcon" src={billboardIcon} id="billboardIcon" alt="billboard"/>
                        </div>
                        <h1 className="billboardMainHeader">Billboards</h1>
                        <div id="billboardUnderline"></div>
                        <p className="billboardMainPar">
                            If you're looking for a billboard we may have one available.
                            <Link to="/contact-us" id="contactLink">Contact us</Link>  today to check availability.
                        </p>
                    </div>
                    <div id="billboard-carousel">
                        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} transitionTime={350} interval={5000} dynamicHeight >
                            <div><img src={billboard2} alt=""/></div>
                            <div><img src={billboard3} alt=""/></div>
                            <div><img src={billboard4} alt=""/></div>
                        </Carousel>
                    </div>

                </div>
            </div>
        )
    }
}
export default Billboards;