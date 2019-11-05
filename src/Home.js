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
import paps from './images/papsLogo.jpg';
import bryantFarms from './images/bryantFarmsLogo.png';
import holmes from './images/holmesLogo.png';
import taylorAuction from './images/taylor-auction-logo.png';
import tutwilerClinic from './images/tutwiler-clinic-logo.png';
import coffeeville from './images/coffeeville_logo.png';
import Bar805 from './images/805Bar.jpg';
import brokenEgg from './images/another-broken-egg.png';
import boot from './images/boot.png';
import botanicalGardens from './images/botanical-gardens.png';
import brickhouse from './images/brickhouse-sports-cafe-logo.png';
import bullet from './images/bullet-barrel.png';
import otbx from './images/otbx-solid.png';
import purpleCup from './images/purplecup-logo-solid.png';
import straightToAle from './images/straight-to-ale.png';
import poppy from './images/the-poppy-solid.png';
import atWood from './images/atwoodLogo.png';
import InfiniteCarousel from 'react-leaf-carousel';
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
                                <div className="home-service-logo" id="homeProVidLogo"></div>
                            </div>
                        </div>
                        <div className="home-what-column">
                            <h3 className="homeProHead"> Video Production </h3>
                            <p className="home-what-par"> All videos are shot and edited by us. We develop relationships with our clients. We find out exactly what they need and produce great video content.  </p>
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
                            <p className="home-what-par"> We help you connect a brand with people. We produce creative and eye catching products that separates you from the competition.  </p>
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
                            <p className="home-what-par"> Billboards are a great way to get your brand seen by a lot of people. Whether you're starting out and need brand recognition or want to promote a special we can help!  </p>
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
                <div className="home-video-holder">
                    <h2 className="home-video-header"> Need a Website? </h2>
                    <div className="home-cta-container">
                        <Link to="/web-development" className="home-cta"> 
                            Learn More 
                            <i className="fas fa-chevron-right"></i>    
                        </Link>
                    </div>
                    <iframe title="We Make Ads - Website Video" className="home-video" src="https://player.vimeo.com/video/368840295" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
                <div id="client-holder">
                    <h2 className="homeClientHeader"> Our Clients.  </h2>
                    <InfiniteCarousel
                        breakpoints={[
                            {
                                breakpoint: 1000,
                                settings: {
                                    slidesToShow: 6,
                                    slidesToScroll: 1,
                                    autoCycle: true,
                                    cycleInterval: 2000,
                                },
                            },
                            {
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 1,
                                    autoCycle: true,
                                    cycleInterval: 2000,
                                },
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    autoCycle: true,
                                    cycleInterval: 2000,
                                },
                            },
                            {
                                breakpoint: 400,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    autoCycle: true,
                                    cycleInterval: 2000,
                                }
                            }
                        ]}
                        dots={false}
                        showSides={false}
                        showArrows={true}
                        slidesToScroll={1}
                        slidesToShow={7}
                        scrollOnDevice={true}
                        responsive={true}
                        autoCycle={true}
                        cycleInterval={2000}
                    >
                        <img className="client-logo" src={paps} alt="Paps"/>
                        <img className="client-logo" src={bryantFarms} alt="Bryant Farms Beef"/>
                        <img className="client-logo" src={holmes} alt="holmes community college"/>
                        <img className="client-logo" src={taylorAuction} alt="Taylor Auction"/>
                        <img className="client-logo" src={tutwilerClinic} alt="Tutwiler Clinic"/>
                        <img className="client-logo" src={coffeeville} alt="Coffeeville School District"/>
                        <img className="client-logo" src={ac} alt="AC's"/>
                        <img className="client-logo" src={ark} alt="Ark La Tex"/>
                        <img className="client-logo" src={badboys} alt="Grenada Bad Boys"/>
                        <img className="client-logo" src={bigMuddy} alt="Big Muddy"/>
                        <img className="client-logo" src={CharlestonsClinic2} alt="Charlestons Clinic"/>
                        <img className="client-logo" src={csb} alt="Cleveland State Bank"/>
                        <img className="client-logo" src={cookTractor} alt="Cook Tractor"/>
                        <img className="client-logo" src={dh} alt="DH4"/>
                        <img className="client-logo" src={eatFresh} alt="Eat Fresh"/>
                        <img className="client-logo" src={fdf} alt="Factory Direct Furniture"/>
                        <img className="client-logo" src={dental} alt="Grenada Dental"/>
                        <img className="client-logo" src={hampton} alt="Hampton Inn"/>
                        <img className="client-logo" src={hc} alt="Holcomb Clinic"/>
                        <img className="client-logo" src={kirkAuto} alt="Kirk Auto Company"/>
                        <img className="client-logo" src={ml} alt="Magnola Lighting"/>
                        <img className="client-logo" src={modine} alt="Modine"/>
                        <img className="client-logo" src={nsmc} alt="North Sunflower Medical Center"/>
                        <img className="client-logo" src={sayle} alt="Sayle Oil Company"/>
                        <img className="client-logo" src={spencer} alt="Spencers Dairy Kreamer"/>
                        <img className="client-logo" src={tgh} alt="TGH"/>
                        <img className="client-logo" src={tree} alt="Caldwell Tree Services"/>
                        <img className="client-logo" src={truckOutfitter} alt="DK Truck Outfitters"/>
                        <img className="client-logo" src={wngn} alt="WeeNeeGeeNee"/>
                        <img className="client-logo" src={winonaTractor} alt="Winona Tractor"/>
                        <img className="client-logo" src={xPlore} alt="xPlore"/>
                        <img className="client-logo" src={Bar805} alt="The Bar at 805"/>
                        <img className="client-logo" src={brokenEgg} alt="Another Broken Egg"/>
                        <img className="client-logo" src={boot} alt="The boot pizzeria"/>
                        <img className="client-logo" src={botanicalGardens} alt="Botanical Gardens"/>
                        <img className="client-logo" src={brickhouse} alt="Brickhouse Sports Cafe"/>
                        <img className="client-logo" src={bullet} alt="Bullet and Barrel"/>
                        <img className="client-logo" src={otbx} alt="Otbx"/>
                        <img className="client-logo" src={purpleCup} alt="Secret Art Trail Huntsville, Al"/>
                        <img className="client-logo" src={straightToAle} alt="Straight To Ale"/>
                        <img className="client-logo" src={poppy} alt="The Poppy"/>
                        <img className="client-logo" src={atWood} alt="Atwood Chevrolet"/>
                    </InfiniteCarousel>
                </div>
            </div>
        )
    }
}

export default Home;