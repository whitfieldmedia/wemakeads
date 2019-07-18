import React from 'react';
import ac from './images/acs.svg';
import ark from './images/ark-la-tex.svg';
import badboys from './images/grenada-bad-boys.svg';
import bigMuddy from './images/big-muddy-logo.svg';
import CharlestonsClinic2 from './images/charleston-clinic.png';
import csb from './images/csblogo.png';
import cookTractor from './images/cook-tractor.svg';
import dh from './images/dh4.svg';
import eatFresh from './images/buon-cibo-logo.svg';
import fdf from './images/factory-direct-logo.png';
import dental from './images/grenadaDentalLogo.jpg';
import hampton from './images/hampton-inn-logo.svg'
import hc from './images/holcomb-clinic-logo.svg';
import kirkAuto from './images/kirk-auto-logo.svg';
import ml from './images/magnolia-lighting-logo.svg';
import modine from './images/modine.jpeg';
import nsmc from './images/nsunflower-logo.svg';
import sayle from './images/sayle-logo.png';
import spencer from './images/spencers2.png';
import tgh from './images/tghlogo.png';
import tree from './images/caldwell-logo.svg';
import truckOutfitter from './images/truckOutfitters2.png';
import wngn from './images/weenee-logo.svg';
import winonaTractor from './images/winonaTractor2.png';
import xPlore from './images/xPlore.svg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles/css/home.css';

class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div id="homePage">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Whitfield Media | Grenada Ms </title>
                    <link rel="canonical" href="https://www.wemakeads.com/"/>
                    <meta name="description" content="Welcome to Whitfield Media. We are a advertising agency specializing in connecting brands with people. Let us help your business take flight!" />
                </Helmet>
                <div id="homeTop">
                    <div className="home-top-container">
                        <h1 className="home-top-header"> We Make Ads. </h1>
                        <h2 className="home-what-header"> Let us help your business take flight! </h2>
                    </div>
                </div>
                <div className="home-what-header-wrapper">
                </div>
                <div id="homeWhat">
                    <div className="home-brand-header-wrapper">
                        <h2 className="home-brand-header"> We specialize in connecting brands with people. </h2>
                    </div>
                    <Link className="home-what" to="/video-production">
                        <div className="home-what-column">
                            <div className="homeLogoHolder">
                                <div id="homeProVidLogo"></div>
                            </div>
                        </div>
                        <div className="home-what-column">
                            <h3 className="homeProHead"> Video Production </h3>
                            <p className="home-what-par"> All videos are shot and edited by us. We develop relationship with our clients to find out exactly what they need and produce great commercials and videos for them.  </p>
                        </div>
                    </Link>
                    <Link className="home-what" to="/digital-marketing">
                        <div className="home-what-column">
                            <div className="homeLogoHolder">
                                <div id="homeProAdLogo"></div>
                            </div>
                        </div>  
                        <div className="home-what-column">
                            <h3 className="homeProHead"> Advertising & Digital Marketing </h3>
                            <p className="home-what-par"> We help you connect a brand with people. We produce creative and eye catching products that differentiates you from the competition.  </p>
                        </div>
                    </Link>
                    <Link className="home-what" to="/graphic-design">
                        <div className="home-what-column">
                            <div className="homeLogoHolder">
                                <div id="homeProDesignLogo"></div>
                            </div>
                        </div>
                        <div className="home-what-column">
                            <h3 className="homeProHead"> Graphic Design </h3>
                            <p className="home-what-par"> We love getting creative and designing anything from digital ads to billboards. We follow a consistent visual identification of your service or product.   </p>
                        </div> 
                    </Link>
                    <Link className="home-what" to="/billboards">
                        <div className="home-what-column">
                            <div className="homeLogoHolder">
                                <div id="homeProBillboardLogo"></div>
                            </div>
                        </div>
                        <div className="home-what-column">
                            <h3 className="homeProHead"> Billboards </h3>
                            <p className="home-what-par"> Billboards are a great way to get your brand seen by a lot of people. Wether you're starting out and need brand recognition or want to promote a special we can help!  </p>
                        </div> 
                    </Link>
                    <Link className="home-what" to="/web-development">
                        <div className="home-what-column">
                            <div className="homeLogoHolder">
                                <div id="homeProLaptopLogo"></div>
                            </div>
                        </div>
                        <div className="home-what-column">
                            <h3 className="homeProHead"> Web Development & Design </h3>
                            <p className="home-what-par"> A website is the front page of your brand and the first impression many people have of your business. We build and maintain fully custom websites that are optimized for search engines, so you can make a great first impression. </p>
                        </div> 
                    </Link>
                </div>
                <div id="client-holder">
                    <h2 className="homeClientHeader"> Our Clients.  </h2>
                    <div className="client-wrapper">
                        <div className="client-holder"> <img src={ac} alt="AC's"/> </div>
                        <div className="client-holder"> <img src={ark} alt="Ark La Tex"/> </div>
                        <div className="client-holder"> <img src={badboys} alt="Grenada Bad Boys"/> </div>
                        <div className="client-holder"> <img src={bigMuddy} alt="Big Muddy"/> </div>
                        <div className="client-holder"> <img src={CharlestonsClinic2} alt="Charlestons Clinic"/> </div>
                        <div className="client-holder"> <img src={csb} alt="Cleveland State Bank"/> </div>
                        <div className="client-holder"> <img src={cookTractor} alt="Cook Tractor"/> </div>
                        <div className="client-holder"> <img src={dh} alt="DH4"/> </div>
                        <div className="client-holder"> <img src={eatFresh} alt="Eat Fresh"/> </div>
                        <div className="client-holder"> <img src={fdf} alt="Factory Direct Furniture"/> </div>
                        <div className="client-holder"> <img src={dental} alt="Grenada Dental"/> </div>
                        <div className="client-holder"> <img src={hampton} alt="Hampton Inn"/> </div>
                        <div className="client-holder"> <img src={hc} alt="Holcomb Clinic"/> </div>
                        <div className="client-holder"> <img src={kirkAuto} alt="Kirk Auto Company"/> </div>
                        <div className="client-holder"> <img src={ml} alt="Magnola Lighting"/> </div>
                        <div className="client-holder"> <img src={modine} alt="Modine"/> </div>
                        <div className="client-holder"> <img src={nsmc} alt="North Sunflower Medical Center"/> </div>
                        <div className="client-holder"> <img src={sayle} alt="Sayle Oil Company"/> </div>
                        <div className="client-holder"> <img src={spencer} alt="Spencers Dairy Kreamer"/> </div>
                        <div className="client-holder"> <img src={tgh} alt="TGH"/> </div>
                        <div className="client-holder"> <img src={tree} alt="Caldwell Tree Services"/> </div>
                        <div className="client-holder"> <img src={truckOutfitter} alt="DK Truck Outfitters"/> </div>
                        <div className="client-holder"> <img src={wngn} alt="WeeNeeGeeNee"/> </div>
                        <div className="client-holder"> <img src={winonaTractor} alt="Winona Tractor"/> </div>
                        <div className="client-holder"> <img src={xPlore} alt="xPlore"/> </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;