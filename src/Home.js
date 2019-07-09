import React from 'react';
import ac from './images/ACs2.png';
import ark from './images/ark-la-tex2.png';
import badboys from './images/badboys2.png';
import bigMuddy from './images/bigMuddy2.png';
import CharlestonsClinic2 from './images/CharlestonsClinic2.png';
import csb from './images/clevelandStateBank2.png';
import cookTractor from './images/Cook+Tractor2.png';
import dh from './images/DH42.png';
import eatFresh from './images/eatFresh.png';
import fdf from './images/factoryDirectFurniture.png';
import dental from './images/grenadaDental2.png';
import hampton from './images/hampton.png'
import hc from './images/holcombClinic2.png';
import kirkAuto from './images/kirkAuto2.png';
import ml from './images/magnolaLighting2.png';
import modine from './images/modine.jpeg';
import nsmc from './images/northSunflowerMedical2.png';
import sayle from './images/sayle2.png';
import spencer from './images/spencers2.png';
import tgh from './images/thg2.png';
import tree from './images/treeService2.png';
import truckOutfitter from './images/truckOutfitters2.png';
import wngn from './images/WeeNeeGeeNee2.png';
import winonaTractor from './images/winonaTractor2.png';
import xPlore from './images/xPlore2.png';
import wml from './images/whitfieldMediaLogo.png';
import InfiniteCarousel from 'react-leaf-carousel';
import './styles/scss/home.scss';

class Home extends React.Component {
    render() {
        return (
            <div id="homePage">
                <div id="homeTop">
                    <div id="logo">
                        <img id="whitfieldLogo" class="homeLogo" src={wml} alt="Whitfield Media"/>
                        <h1 class="header">We Make Ads</h1>
                        <a href="tel:6628091975" id="number"> (662) 809-1975 </a>
                    </div>
                </div>
            
                <div id="homeWhat">
                    <div class="homePro" id="vidProHome">
                        <div id="vidBlueHolder" class="homeLogoHolder">
                            <div id="homeProVidLogo"></div>
                        </div>
                        <div class="homeProHead">VIDEO PRODUCTION</div>
                        <div class="homeListContainer">
                            <p class="homeList">Commercials</p>
                            <p class="homeList">Training Videos</p>
                            <p class="homeList">Music Videos</p>
                        </div>
                    </div>
                
                    <div class="homePro">
                        <div class="homeLogoHolder">
                            <div id="homeProAdLogo"></div>
                        </div>
                        <h1 class="homeProHead">ADVERTISING</h1>
                        <div class="homeListContainer">
                            <p class="homeList">Television</p>
                            <p class="homeList">Radio</p>
                            <p class="homeList">Digital</p>
                        </div>
                    </div>
                
                    <div class="homePro">
                        <div class="homeLogoHolder">
                            <div id="homeProDesignLogo"></div>
                        </div>
                        <h1 class="homeProHead">GRAPHIC DESIGN</h1>
                        <div class="homeListContainer">
                            <p class="homeList">Print Ads</p>
                            <p class="homeList">Logos</p>
                            <p class="homeList">Fliers</p>
                        </div>
                    </div>

                    <div class="homePro">
                        <div class="homeLogoHolder">
                            <div id="homeProBillboardLogo"></div>
                        </div>
                        <h1 class="homeProHead">Billboards</h1>
                        <div class="homeListContainer">
                            <p class="homeList">Traditional</p>
                            <p class="homeList">Digital</p>
                            <p class="homeList">Create Awareness</p>
                        </div>
                    </div>
                
                    <div class="homePro">                                
                        <div class="homeLogoHolder">
                            <div id="homeProLaptopLogo"></div>
                        </div>
                        <h1 class="homeProHead">Web Development</h1>
                        <div class="homeListContainer">
                            <p class="homeList">Design</p>
                            <p class="homeList">Mobile Friendly</p>
                            <p class="homeList">Great First Impression</p>
                        </div>
                    </div>
                
                    <div class="homePro">                                
                        <div class="homeLogoHolder">
                            <div id="homeProSocialLogo"></div>
                        </div>
                        <h1 class="homeProHead">Digital Marketing</h1>
                        <div class="homeListContainer">
                            <p class="homeList">Digital Ads</p>
                            <p class="homeList">Google</p>
                            <p class="homeList">Facebook</p>
                        </div>
                    </div>
                </div>
            
                <div class="recentWork">
                    <h2 class="workHeader">Whitfield Media</h2>
                    <div id="background-video">
                        <iframe title="Whitfield Media Commercial" class="homeVid" id="video" src="https://player.vimeo.com/video/228438285" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                <h2 class="homeProHead"> Our Clients </h2>
                <InfiniteCarousel breakpoints={[ {breakpoint: 1000, settings: { slidesToShow: 6, slidesToScroll: 1}}, {breakpoint: 800, settings: { slidesToShow: 4}}, { breakpoint: 500, settings: {slidesToShow: 3}}]} dots={false} showSides={false} slidesToScroll={1} slidesToShow={8} scrollOnDevice={true} animationDuration={500} autoCycle={true} cycleInterval={3000}>
                    <div> <img src={ac} alt="AC's"/> </div>
                    <div> <img src={ark} alt="Ark La Tex"/> </div>
                    <div> <img src={badboys} alt="Grenada Bad Boys"/> </div>
                    <div> <img src={bigMuddy} alt="Big Muddy"/> </div>
                    <div> <img src={CharlestonsClinic2} alt="Charlestons Clinic"/> </div>
                    <div> <img src={csb} alt="Cleveland State Bank"/> </div>
                    <div> <img src={cookTractor} alt="Cook Tractor"/> </div>
                    <div> <img src={dh} alt="DH4"/> </div>
                    <div> <img src={eatFresh} alt="Eat Fresh"/> </div>
                    <div> <img src={fdf} alt="Factory Direct Furniture"/> </div>
                    <div> <img src={dental} alt="Grenada Dental"/> </div>
                    <div> <img src={hampton} alt="Hampton Inn"/> </div>
                    <div> <img src={hc} alt="Holcomb Clinic"/> </div>
                    <div> <img src={kirkAuto} alt="Kirk Auto Company"/> </div>
                    <div> <img src={ml} alt="Magnola Lighting"/> </div>
                    <div> <img src={modine} alt="Modine"/> </div>
                    <div> <img src={nsmc} alt="North Sunflower Medical Center"/> </div>
                    <div> <img src={sayle} alt="Sayle Oil Company"/> </div>
                    <div> <img src={spencer} alt="Spencers Dairy Kreamer"/> </div>
                    <div> <img src={tgh} alt="TGH"/> </div>
                    <div> <img src={tree} alt="Caldwell Tree Services"/> </div>
                    <div> <img src={truckOutfitter} alt="DK Truck Outfitters"/> </div>
                    <div> <img src={wngn} alt="WeeNeeGeeNee"/> </div>
                    <div> <img src={winonaTractor} alt="Winona Tractor"/> </div>
                    <div> <img src={xPlore} alt="xPlore"/> </div>
                </InfiniteCarousel>
            </div>
        )
    }
}

export default Home;