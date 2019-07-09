import React from 'react';
import vidPro from './images/vidPro.svg';
import drone from './images/drone.svg';
import vidCamera from './images/video-camera.svg';
import design from './images/graphic-design.svg';
import camera from './images/camera.svg';
import file from './images/flyer.svg';
import microphone from './images/microphone.svg';
import './styles/scss/video-production.scss';

function VideoProduction() {
    return (
        <div id="videoPage">
            <div className="whatTop" id="vidTop">
                <div className="whatIconHolder">
                    <img className="whatIcon" id="vidPro" src={vidPro} alt="video production"/>
                </div>
                <h1 className="whatMainHeader">Video Production</h1>
                <div id="vidProUnderline"></div>
                <p className="whatMainPar">
                    Whitfield Media is one of the very few advertising companies that offers video production in house. One of the benefits is that we have a direct connection with our clients (when developing the project) rather than going through a "middle man". This means that we make the video (or project) that you are looking for without compromise. Any necessary changes that need to be made to your project is done right away without any issue!
                </p>
            </div>
            <div id="vidMid">
                <p className="whatPar">
                    Have trouble coming up with an idea to sell your product? Leave the planning to us!
                </p>
                <p className="whatPar">
                    Have an idea already in mind? No problem! We will produce the project to match YOUR vision!
                </p>
                <p className="whatPar">
                    In order to keep up with today's technology, we update our equipment on a routine basis (cameras, lights, audio, etc.). We want to make you an ad that replicates national television ads! (Which we do.)
                </p>
            </div>
            <div id="vidBottom">
                <h2 className="vidSubHeader">Our capabilities:</h2><br/>
                <div className="whatIconContainer" id="proLogoContainer">
                    <div id="aerialContainer" className="logoContainer">
                        <div id="aerial1Container" className="logoHolder">
                        <div className="proLogoHolder">
                            <img id="droneBlue" className="proLogo" src={drone} alt="drone"/>
                        </div>
                            <h2 className="vidSubHeader">Aerial Shots</h2>
                        </div>
                    </div>
                    <div id="designContainer" className="logoContainer">
                        <div id="design1Contianer" className="logoHolder">
                            <div className="proLogoHolder">
                                <img id="designBlue" className="proLogo" src={vidCamera} alt="computer design logo"/>
                            </div>
                            <h2 className="vidSubHeader"> Commercials </h2>
                        </div>
                    </div>
                    <div className="logoContainer">
                        <div className="logoHolder">
                            <div className="proLogoHolder">
                                <img id="designPro" className="proLogo" src={design} alt="graphic design"/>
                            </div>
                            <h2 className="vidSubHeader"> Design </h2>
                        </div>
                    </div>
                    <div id="cameraContainer" className="logoContainer">
                        <div id="camera1Container" className="logoHolder">
                            <div className="proLogoHolder">
                                <img id="cameraBlue" className="proLogo" src={camera} alt="camera"/>
                            </div>
                            <h2 className="vidSubHeader">Photos</h2>
                        </div>
                    </div>

                    <div id="scriptContainer" className="logoContainer">
                        <div id="script1Container" className="logoHolder">
                            <div className="proLogoHolder">
                                <img id="scriptPro" className="proLogo" src={file} alt="scripts"/>
                            </div>
                            <h2 className="vidSubHeader"> Scripts </h2>
                        </div>
                    </div>
                    <div className="logoContainer">
                        <div className="logoHolder">
                            <div className="proLogoHolder">
                                <img id="voicePro" className="proLogo" src={microphone} alt="scripts"/>
                            </div>
                            <h2 className="vidSubHeader"> Voice Over </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoProduction;