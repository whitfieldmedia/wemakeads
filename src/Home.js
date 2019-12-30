import React from 'react';
import ac from './images/acs.jpg';
import acW from './images/webp/acs.webp';
import ark from './images/ark-la-tex.svg';
import arkW from './images/webp/ark-la-tex.webp';
import badboys from './images/grenada-bad-boys.svg';
import badboysW from './images/webp/grenada-bad-boys.webp';
import bigMuddy from './images/big-muddy-logo.jpg';
import bigMuddyW from './images/webp/big-muddy-logo.webp';
import CharlestonsClinic2 from './images/charleston-clinic.png';
import CharlestonsClinicW from './images/webp/charleston-clinic.webp';
import csb from './images/csblogo.jpg';
import csbW from './images/webp/csblogo.webp';
import cookTractor from './images/cook-tractor.svg';
import cookTractorW from './images/webp/cook-tractor.webp';
import dh from './images/dh4.jpg';
import dhW from './images/webp/dh4.webp';
import eatFresh from './images/buon-cibo-logo.jpg';
import eatFreshW from './images/webp/buon-cibo-logo.webp';
import fdf from './images/factory-direct-logo.jpg';
import fdfW from './images/webp/factory-direct-logo.webp';
import dental from './images/grenadaDentalLogo.jpg';
import dentalW from './images/webp/grenadaDentalLogo.webp';
import hampton from './images/hampton-inn-logo.svg'
import hamptonW from './images/webp/hampton-inn-logo.webp';
import hc from './images/holcomb-clinic-logo.jpg';
import hcW from './images/webp/holcomb-clinic-logo.webp';
import kirkAuto from './images/kirk-auto-logo.jpg';
import kirkAutoW from './images/webp/kirk-auto-logo.webp';
import ml from './images/magnolia-lighting-logo.svg';
import mlW from './images/webp/magnolia-lighting-logo.webp';
import modine from './images/modine.jpeg';
import modineW from './images/webp/modine.webp';
import nsmc from './images/nsunflower-logo.svg';
import nsmcW from './images/webp/nsunflower-logo.webp';
import sayle from './images/sayle-logo.jpg';
import sayleW from './images/webp/sayle-logo.webp';
import spencer from './images/spencers2.png';
import spencerW from './images/webp/spencers2.webp';
import tgh from './images/thg.jpg';
import tghW from './images/webp/thg.webp';
import tree from './images/caldwell-logo.jpg';
import treeW from './images/webp/caldwell-logo.webp';
import truckOutfitter from './images/truckOutfitters2.jpg';
import truckOutfitterW from './images/webp/truckOutfitters2.webp';
import wngn from './images/weenee-logo.jpg';
import wngnW from './images/webp/weenee-logo.webp'
import winonaTractor from './images/winonaTractor2.png';
import winonaTractorW from './images/webp/winonaTractor2.webp';
import xPlore from './images/xPlore.svg';
import xPloreW from './images/webp/xPlore.webp';
import paps from './images/papsLogo.jpg';
import papsW from './images/webp/papsLogo.webp';
import bryantFarms from './images/bryantFarmsLogo.jpg';
import bryantFarmsW from './images/webp/bryantFarmsLogo.webp';
import holmes from './images/holmesLogo.jpg';
import holmesW from './images/webp/holmesLogo.webp';
import taylorAuction from './images/taylor-auction-logo.jpg';
import taylorAuctionW from './images/webp/taylor-auction-logo.webp';
import tutwilerClinic from './images/tutwiler-clinic-logo.jpg';
import tutwilerClinicW from './images/webp/tutwiler-clinic-logo.webp';
import coffeeville from './images/coffeeville_logo.jpg';
import coffeevilleW from './images/webp/coffeeville_logo.webp';
import Bar805 from './images/805Bar.jpg';
import Bar805W from './images/webp/805Bar.webp';
import brokenEgg from './images/another-broken-egg.jpg';
import brokenEggW from './images/webp/another-broken-egg.webp';
import boot from './images/boot.jpg';
import bootW from './images/webp/boot.webp';
import botanicalGardens from './images/botanical-gardens.jpg';
import botanicalGardensW from './images/webp/botanical-gardens.webp';
import bullet from './images/bullet-barrel.jpg';
import bulletW from './images/webp/bullet-barrel.webp';
import otbx from './images/otbx-solid.jpg';
import otbxW from './images/webp/otbx-solid.webp';
import purpleCup from './images/purplecup-logo-solid.jpg';
import purpleCupW from './images/webp/purplecup-logo-solid.webp';
import straightToAle from './images/straight-to-ale.jpg';
import straightToAleW from './images/webp/straight-to-ale.webp';
import poppy from './images/the-poppy-solid.jpg';
import poppyW from './images/webp/the-poppy-solid.webp';
import atWood from './images/atwoodLogo.jpg';
import atWoodW from './images/webp/atwoodLogo.webp';
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
                        <picture>
                            <source type="image/webp" srcSet={papsW} />
                            <img className="client-logo" src={paps} alt="Paps"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={bryantFarmsW} />
                            <img className="client-logo" src={bryantFarms} alt="Bryant Farms Beef"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={holmesW} />
                            <img className="client-logo" src={holmes} alt="holmes community college"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={taylorAuctionW} />
                            <img className="client-logo" src={taylorAuction} alt="Taylor Auction"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={tutwilerClinicW} />
                            <img className="client-logo" src={tutwilerClinic} alt="Tutwiler Clinic"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={coffeevilleW} />
                            <img className="client-logo" src={coffeeville} alt="Coffeeville School District"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={acW} />
                            <img className="client-logo" src={ac} alt="AC's"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={arkW} />
                            <img className="client-logo" src={ark} alt="Ark La Tex"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={badboysW} />
                            <img className="client-logo" src={badboys} alt="Grenada Bad Boys"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={bigMuddyW} />
                            <img className="client-logo" src={bigMuddy} alt="Big Muddy"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={CharlestonsClinicW} />
                            <img className="client-logo" src={CharlestonsClinic2} alt="Charlestons Clinic"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={csbW} />
                            <img className="client-logo" src={csb} alt="Cleveland State Bank"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={cookTractorW} />
                            <img className="client-logo" src={cookTractor} alt="Cook Tractor"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={dhW} />
                            <img className="client-logo" src={dh} alt="DH4"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={eatFreshW} />
                            <img className="client-logo" src={eatFresh} alt="Eat Fresh"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={fdfW} />
                            <img className="client-logo" src={fdf} alt="Factory Direct Furniture"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={dentalW} />
                            <img className="client-logo" src={dental} alt="Grenada Dental"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={hamptonW} />
                            <img className="client-logo" src={hampton} alt="Hampton Inn"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={hcW} />
                            <img className="client-logo" src={hc} alt="Holcomb Clinic"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={kirkAutoW} />
                            <img className="client-logo" src={kirkAuto} alt="Kirk Auto Company"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={mlW} />
                            <img className="client-logo" src={ml} alt="Magnola Lighting"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={modineW} />
                            <img className="client-logo" src={modine} alt="Modine"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={nsmcW} />
                            <img className="client-logo" src={nsmc} alt="North Sunflower Medical Center"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={sayleW} />
                            <img className="client-logo" src={sayle} alt="Sayle Oil Company"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={spencerW} />
                            <img className="client-logo" src={spencer} alt="Spencers Dairy Kreamer"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={tghW} />
                            <img className="client-logo" src={tgh} alt="TGH"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={treeW} />
                            <img className="client-logo" src={tree} alt="Caldwell Tree Services"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={truckOutfitterW} />
                            <img className="client-logo" src={truckOutfitter} alt="DK Truck Outfitters"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={wngnW} />
                            <img className="client-logo" src={wngn} alt="WeeNeeGeeNee"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={winonaTractorW} />
                            <img className="client-logo" src={winonaTractor} alt="Winona Tractor"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={xPloreW} />
                            <img className="client-logo" src={xPlore} alt="xPlore"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={Bar805W} />
                            <img className="client-logo" src={Bar805} alt="The Bar at 805"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={brokenEggW} />
                            <img className="client-logo" src={brokenEgg} alt="Another Broken Egg"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={bootW} />
                            <img className="client-logo" src={boot} alt="The boot pizzeria"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={botanicalGardensW} />
                            <img className="client-logo" src={botanicalGardens} alt="Botanical Gardens"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={bulletW} />
                            <img className="client-logo" src={bullet} alt="Bullet and Barrel"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={otbxW} />
                            <img className="client-logo" src={otbx} alt="Otbx"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={purpleCupW} />
                            <img className="client-logo" src={purpleCup} alt="Secret Art Trail Huntsville, Al"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={straightToAleW} />
                            <img className="client-logo" src={straightToAle} alt="Straight To Ale"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={poppyW} />
                            <img className="client-logo" src={poppy} alt="The Poppy"/>
                        </picture>
                        <picture>
                            <source type="image/webp" srcSet={atWoodW} />
                            <img className="client-logo" src={atWood} alt="Atwood Chevrolet"/>
                        </picture>
                    </InfiniteCarousel>
                </div>
            </div>
        )
    }
}

export default Home;