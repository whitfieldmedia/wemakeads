import React from 'react';
import { Helmet } from 'react-helmet';
import './styles/css/gallery.css';

class VideoGallery extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div id="gallery-page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Video Gallery | Whitfield Media </title>
                    <link rel="canonical" href="https://www.wemakeads.com/video-gallery"/>
                    <meta name="description" content="Whitfield Media has produced hundred of commercials for our clients. Check out our latest videos." />
                </Helmet>
                <h1 className='galleryHeader'>Check out our latest videos!</h1>
                <div className="galleryNote">(Note: Be sure to choose HD/1080p when 
                    playing a video to get the best quality)
                </div>
                <div id="galleryGrid">
                    <iframe title="45 years" className="galleryVid" src="https://player.vimeo.com/video/278025343" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Grenada Dental Associates" className="galleryVid" src="https://player.vimeo.com/video/360892714" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="Factory Direct Furniture" className="galleryVid" src="https://player.vimeo.com/video/356270517" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="Sayle" className="galleryVid" src="https://player.vimeo.com/video/263207407" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="NSMC" className="galleryVid" src="https://player.vimeo.com/video/210287313" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Winona Tractor and Equipment" className="galleryVid" src="https://player.vimeo.com/video/355119368" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="The Great Ruleville Roast" className="galleryVid" src="https://player.vimeo.com/video/358852894" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="Winona Tractor and Equipment" className="galleryVid" src="https://player.vimeo.com/video/282870155" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Guitar" className="galleryVid" src="https://player.vimeo.com/video/288794659" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Grenada Bad Boys" className="galleryVid" src="https://player.vimeo.com/video/231563270" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Modine" className="galleryVid" src="https://player.vimeo.com/video/251848168" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Kirk Toyota" className="galleryVid" src="https://player.vimeo.com/video/203195668" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Caldwell tree service" className="galleryVid" src="https://player.vimeo.com/video/218074020" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Sayle" className="galleryVid" src="https://player.vimeo.com/video/203851847" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Winona Tractor and Equipment" className="galleryVid" src="https://player.vimeo.com/video/263374844" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Factory Direct Furniture" className="galleryVid" src="https://player.vimeo.com/video/203856417" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Truck Outfitters" className="galleryVid" src="https://player.vimeo.com/video/201933562" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Kirk Auto Company" className="galleryVid" src="https://player.vimeo.com/video/253647425" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Factory Direct Furniture" className="galleryVid" src="https://player.vimeo.com/video/202045626" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Kirk Auto Company" className="galleryVid" src="https://player.vimeo.com/video/253651642" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Sayle Hunting" className="galleryVid" src="https://player.vimeo.com/video/253647684" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="DH4" className="galleryVid" src="https://player.vimeo.com/video/201932785" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="North Sunflower Spot 2" className="galleryVid" src="https://player.vimeo.com/video/253651473" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Dipstix" className="galleryVid" src="https://player.vimeo.com/video/203852758" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Winona Tractor and Equipment" className="galleryVid" src="https://player.vimeo.com/video/212928718" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Brickhouse Sports Cafe" className="galleryVid" src="https://player.vimeo.com/video/325911869" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="Winona Tractor and Equipment" className="galleryVid" src="https://player.vimeo.com/video/217913382" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Elizabeth Evans, North Sunflower Medical" className="galleryVid" src="https://player.vimeo.com/video/205110818" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Grenada EDD - ADAPT." className="galleryVid" src="https://player.vimeo.com/video/201904340" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Another Broken Egg" className="galleryVid" src="https://player.vimeo.com/video/325227057" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="Adam Cook Husqvarna" className="galleryVid" src="https://player.vimeo.com/video/218361799" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Charleston, MS: A community's journey toward optimal wellness" className="galleryVid" src="https://player.vimeo.com/video/200897337" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Yellowhammer Earth & Stone" className="galleryVid" src="https://player.vimeo.com/video/327992338" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="Kirk Ford" className="galleryVid" src="https://player.vimeo.com/video/199711884" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="TGH" className="galleryVid" src="https://player.vimeo.com/video/229574963" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="The Boot Pizzeria" className="galleryVid" src="https://player.vimeo.com/video/326639658" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="North Sunflower Academy" className="galleryVid" src="https://player.vimeo.com/video/203857559" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Caldwell Tree Service" className="galleryVid" src="https://player.vimeo.com/video/226481283" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Straight To Ale" className="galleryVid" src="https://player.vimeo.com/video/328009086" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="Whitfield Media" className="galleryVid" src="https://player.vimeo.com/video/228438285" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="MHA award video" className="galleryVid" src="https://player.vimeo.com/video/253647942" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="The Poppy" className="galleryVid" src="https://player.vimeo.com/video/336637294" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="Ferguson" className="galleryVid" src="https://player.vimeo.com/video/253652744" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Modine Spot1" className="galleryVid" src="https://player.vimeo.com/video/251853281" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="OTBX" className="galleryVid" src="https://player.vimeo.com/video/336636611" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="Walter B Crook Nursing" className="galleryVid" src="https://player.vimeo.com/video/240190696" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Spencers" className="galleryVid" src="https://player.vimeo.com/video/257173453" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="The Bar at 805" className="galleryVid" src="https://player.vimeo.com/video/325227310" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>
                    <iframe title="Factory Direct Furniture" className="galleryVid" src="https://player.vimeo.com/video/264267436" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Grenada Dental" className="galleryVid" src="https://player.vimeo.com/video/309533922" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" frameBorder="0"></iframe>
                    <iframe title="Bullet and Barrel" className="galleryVid" src="https://player.vimeo.com/video/327991824" allowFullScreen mozAllowFullscreen msAllowFullScreen oAllowFullScreen frameBorder="0"></iframe>

                </div>
            </div>
        )
    }
}

export default VideoGallery;