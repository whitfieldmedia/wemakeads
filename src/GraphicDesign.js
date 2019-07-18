import React from 'react';
import designLogo from './images/graphic-design.svg';
import user from './images/team.svg';
import file from './images/flyer.svg';
import camera from './images/camera.svg';
import newsPaper from './images/newspaper.svg';
import { Helmet } from 'react-helmet';
import './styles/css/design.css';

class GraphicDesign extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div id="designPage">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Graphic Design | Whitfield Media </title>
                    <link rel="canonical" href="https://www.wemakeads.com/graphic-design"/>
                    <meta name="description" content="You can't get peoples attention better than a eye catching design that has your brand on it. Whitfield Media has a well trained graphic designer to offer any designs you need." />
                </Helmet>
                <div id="graphicDesignPage">
                    <div className="whatTop" id="designTop">
                        <div className="whatIconHolder" id="designLogoContainer">
                            <img className="whatIcon" id="designIcon" src={designLogo} alt=""/>
                        </div>
                        <h1 className="whatMainHeader">Graphic Design</h1>
                        <div id="graphicDesignUnderline"></div>
                        <p className="whatMainPar">We design billboards, ads, and logos for our clients. We also have them printed in accordance to our customer's needs. From small decals to massive billboards, we have you covered.</p>
                    </div>
                    <div id="designMid">
                        <p className="whatPar">
                            Whitfield Media employs a well-trained, in-house graphic designer to create billboards, fliers, logos, and banners for our clients. This is especially important if you want to extend your reach of a new product or service you are wanting to sell. The best part about this is that we guarantee a 24 hour turnaround for your project!
                        </p>
                        <br/>
                        <p className="whatPar">
                            We also have a photographer, who travels to our clients' businesses to capture special events, new products, promotions, and staff head shots. This can aid in social media advertising (i.e. Facebook) and/or building your website.
                        </p>
                    </div>

                    
                    <div id="designGridContainer">
                        <div id="designGrid">
                            <div id="socialMedia" className="designColumn">
                                <div id="socialTitle" className="designTitleHolder">
                                    <div className="designIconContainer">
                                        <img src={user} className="designIcon" alt=""/>
                                    </div>
                                    <h2 className="designSubH">Social Media</h2>
                                </div>
                                <div id="socialBlock" className="designBottomBlock">
                                    <div className="designBackground" id="socialBackground">
                                        <p id="socialPar" className="designText">We drive to our clients to see them smile, and what better way to show off that smile than a picture we can post on your social media page?</p>
                                    </div>
                                </div>
                            </div>
                            <div id="beautPhoto" className="designColumn">
                                <div id="beautTitle" className="designTitleHolder">
                                    <div className="designIconContainer">
                                        <img src={camera} className="designIcon" alt=""/>
                                    </div>
                                    <h2 id="beautTitle" className="designSubH">Beautiful <br/> Photographs</h2>
                                </div>
                                <div id="beautBlock" className="designBottomBlock">
                                    <div className="designBackground">
                                        <p id="beautText" className="designText">Nothing sparks a conversation like a unique photograph of your brand.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="fliers" className="designColumn">
                                <div id="flierTitle" className="designTitleHolder">
                                    <div className="designIconContainer">
                                        <img src={file} className="designIcon" alt=""/>
                                    </div>
                                    <h2 id="headTitle" className="designSubH"> Flyers </h2>
                                </div>
                                <div id="headshotBlock" className="designBottomBlock">
                                    <div className="designBackground">
                                        <p id="headshotP" className="designText">Looking for creative fliers for a special event or promotion? Look no further!  Our team designs them, no problem! </p>
                                    </div>
                                </div>
                            </div>
                            <div id="mags" className="designColumn">
                                <div id="magTitle" className="designTitleHolder">
                                    <div className="designIconContainer">
                                        <img src={newsPaper} className="designIcon" alt=""/>
                                    </div>
                                    <h2 id="magTitle" className="designSubH">Magazines & <br/> Newspapers</h2>
                                </div>
                                <div id="magBlock" className="designBottomBlock">
                                    <div className="designBackground">
                                        <p id="magP" className="designText">And we design magazine and newspaper ads as well! </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GraphicDesign;