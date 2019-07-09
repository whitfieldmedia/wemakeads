import React from 'react';
import megaphone from './images/megaphone.svg';
import user from './images/team.svg';
import seo from './images/seo.svg';
import targeting from './images/target.svg';
import './styles/scss/marketing.scss';

function DigitalMarketing() {
    return (
        <div id="adPage">
            <div className="whatTop" id="adTop">
                <div className="whatIconHolder" id="marketingHolder">
                    <img className="whatIcon" id="marketingBlueIcon" src={megaphone}  alt=""/>
                </div>
                <h1 className="whatMainHeader">Advertising & Digital Marketing</h1>
                <div className="underline"></div>
                <p className="whatMainPar">
                    For over a decade, Whitfield Media has provided businesses with quality advertising and marketing. We guarentee you will see results when 
                    you decide to choose us to handle your advertising. Whether you are just starting out or evolving your brand, Whitfield Media will help you grow.
                </p>
            </div>
            <div id="adSecondContainer">
                <p className="whatPar">
                    Whitfield Media solves our clients biggest challenges. Businesses need to continually reinvent themselves to stay ahead in todays world. 
                    At Whitfield Media we build products that catch the eye and differentiates your brand from the competition. 
                    We are focused on creating advertisments that keep our clients ahead of the competition.     
                    Whether you're looking for a commercial, a company logo, or a billboard we do it all! 
                </p>
                <div className="whatIconContainer" id="adIconContainer">
                    <div className="whatLogoContainer">
                        <div className="whatLogoHolder">
                            <img className="whatLogo" src={user} alt="social headshot"/>
                        </div>
                        <h2 className="whatSubHeader"> SOCIAL <br/> MEDIA </h2>
                    </div>
                    <div className="whatLogoContainer">
                        <div className="whatLogoHolder">
                            <img className="whatLogo" src={seo} alt="seo"/>
                        </div>
                        <h2 className="whatSubHeader"> SEO </h2>
                    </div>
                    <div className="whatLogoContainer">
                        <div className='whatLogoHolder'>
                            <img className="whatLogo" src={targeting} alt=""/>
                        </div>
                        <h2 className="whatSubHeader"> Target <br/> Audience </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalMarketing;