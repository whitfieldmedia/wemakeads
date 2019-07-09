import React from 'react';
import tgh from './images/thg.png';
import nsmc from './images/northSunflowerMedical.png';
import blogPost from './images/blogPost.svg';
import nsmcSmile from './images/NSMCSmiling.png';
import nsmcSmile2 from './images/nsmcSmiling1.png';
import modine from './images/modine.png';
import whitfieldNews from './images/whitfieldNews.png';
import nsmcBlog from './images/nsmcBlogImg.png';
import dkLogo from './images/truckOutfitters2.png';
import resolute from './images/resoluteLogo.png';
import apl from './images/advancedProductsLogo.png';
import './styles/scss/blog.scss';

function Blog() {
    return (
        <div id="blog-page">
            <div id="blogHolder">
                <div className="blogPost">
                    <h2 className="blogTitle">Big Congrats to TGH and North Sunflower Medical Center</h2>
                    <div className="blogImgRow">
                        <img className="blogPostImg" src={tgh} alt="tgh"/>
                        <img className="blogPostImg" src={nsmc} alt="North Sunflower Medical Center"/>
                    </div>
                    <p className="blogText">This year, North Sunflower Medical Center went on to won 5 Aster Awards in Healthcare Advertising. Tallahatchie General Hospital took home 4 Aster Awards. Awesome Job guys!!!</p>
                    <div className="dateAndName">
                        <div className="headAndName">
                            <img className="blogHead" src={blogPost} alt="social head"/>
                            <p className="postName">Charlie Whitfield</p>
                        </div>
                        <p className="postDate">May 17, 2018</p>
                    </div>
                </div>
                <div className="blogPost">
                    <h2 className="blogTitle">North Sunflower Wins Award for "Smiling Faces" Photo</h2>
                    <div className="blogImgRow">
                        <img className="blogPostImg" id="smile" src={nsmcSmile} alt="Smile Award"/>
                        <img className="blogPostImg" id="smile1" src={nsmcSmile2} alt="Smile"/>
                    </div>
                    <p className="blogText">Congratulations to North Sunflower Medical Center for winning the 2017 Maggie Award for Excellence in Photography/Illustration! We captured this moment during a fun shoot! <br/><br/> Take me to Rulevile!!!</p>
                    <div className="dateAndName">
                        <div className="headAndName">
                            <img className="blogHead" src={blogPost} alt="social head"/>
                            <p className="postName">Charlie Whitfield</p>
                        </div>
                        <p className="postDate">November 21, 2017</p>
                    </div>
                </div>
                <div className="blogPost">
                    <h2 className="blogTitle">New Video Produced for Modine</h2>
                    <div className="blogImgRow">
                        <img className="blogSingleImg" id="blogModine" src={modine} alt="Modine Logo"/>
                    </div>
                    <p className="blogText"> In this upcoming video, we will find out what's chill about manufacturing! </p>
                    <div className="dateAndName">
                        <div className="headAndName">
                            <img className="blogHead" src={blogPost} alt="social head"/>
                            <p className="postName">Charlie Whitfield</p>
                        </div>
                        <p className="postDate">October 30, 2017</p>
                    </div>
                </div>
                <div className="blogPost">
                    <h2 className="blogTitle">Whitfield Media featured in Delta Business Journal</h2>
                    <div className="blogImgRow">
                        <img className="blogSingleImg" id="news" src={whitfieldNews} alt="Whitfield Media Newspaper Main page"/>
                    </div>
                    <p className="blogText">Look for us in March 2017's issue of the Delta Business Journal! We are featured in the "Business Spotlight" section. </p>
                    <div className="dateAndName">
                        <div className="headAndName">
                            <img className="blogHead" src={blogPost} alt="social head"/>
                            <p className="postName">Charlie Whitfield</p>
                        </div>
                        <p className="postDate">March 28, 2017</p>
                    </div>
                </div>
                <div className="blogPost">
                    <h2 className="blogTitle" id="charlestonTitle"> Charleston, MS: A Community's Journey Toward Optimal Wellness </h2>
                    <div className="blogImgRow">
                    <iframe frameBorder='0' title="Charleston, Ms: A Community's Journey Toward Optimal Wellness" className="blogVid" id="blogVideo" src="https://player.vimeo.com/video/200897337?&controls=1" allowFullScreen="allowFullScreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                    </div>
                    <p className="blogText" id="blogCharlestonPar"> The team at the James C. Wellness Center wanted a video that documented their community's recent transition toward fitness and optimal wellness. As you can see, Charleston has made huge strides in becoming a health conscious town, thanks to the motivated people!! </p>
                    <div className="dateAndName">
                        <div className="headAndName">
                            <img className="blogHead" src={blogPost} alt="social head"/>
                            <p className="postName">Charlie Whitfield</p>
                        </div>
                        <p className="postDate">February 13, 2017</p>
                    </div>
                </div>
                <div className="blogPost">
                    <h2 className="blogTitle"> We Must Learn to Adapt! </h2>
                    <div className="blogImgRow">
                        <iframe frameBorder='0' title="We Must Learn to Adapt" className="blogVid" id="blogAdaptVid" src="https://player.vimeo.com/video/201904340?&controls=1" allowFullScreen="allowFullScreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                    </div>
                    <p className="blogText"> Check out this new video for the Grenada Economic Development Center. The video highlights the importance of "constant learning", which is crucial in staying relevant in the workforce. </p>
                    <div className="dateAndName">
                        <div className="headAndName">
                            <img className="blogHead" src={blogPost} alt="social head"/>
                            <p className="postName">Charlie Whitfield</p>
                        </div>
                        <p className="postDate">February 13, 2017</p>
                    </div>
                </div>
                <div className="blogPost">
                    <h2 className="blogTitle" id="nsmcTitle">North Sunflower Medical Center earns The Outstanding Mississippi Rural Hospital Award</h2>
                    <div className="blogImgRow">
                        <img className="blogSingleImg" id="nsmcBlog" src={nsmcBlog} alt="NSMC Hospital Award"/>
                    </div>
                    <p className="blogText" id="nsmcPar"> Our dear friends at North Sunflower Medical Center have won a much deserved award from the Mississippi Hospital Association - The Outstanding Mississippi Rural Hospital Award! With that said, we will be producing a new video in honor of NSMC's awesome achievement! Stay tuned! </p>
                    <div className="dateAndName">
                        <div className="headAndName">
                            <img className="blogHead" src={blogPost} alt="social head"/>
                            <p className="postName">Charlie Whitfield</p>
                        </div>
                        <p className="postDate">August 01, 2016</p>
                    </div>
                </div>
                <div className="blogPost">
                    <h2 className="blogTitle"> Whitfield Media Produces 3 New Videos for the Grenada Economic Development District </h2>
                    <div className="blogImgRow">
                        <img className="blogSingleImg" id="blogDkLogo" src={dkLogo} alt="NSMC Hospital Award"/>
                        <img className="blogSingleImg" id="blogResoluteLogo" src={resolute} alt="NSMC Hospital Award"/>
                    </div>
                    <div className="blogImgRow2">
                        <img className="blogSingleImg" id="blogAdvancedLogo" src={apl} alt="NSMC Hospital Award"/>
                    </div>
                    <p className="blogText" id="nsmcBlogPar"> What's cool and newsworthy about manufacturing in Grenada?  What about starting up a business? All of these questions will be answered with 3 upcoming videos that we are producing for the Grenada Economic Development District. These places of interest will be: Advanced Distributer Products, Resolute, and DK Truck Outfitters. </p>
                    <div className="dateAndName">
                        <div className="headAndName">
                            <img className="blogHead" src={blogPost} alt="social head"/>
                            <p className="postName">Charlie Whitfield</p>
                        </div>
                        <p className="postDate">July 29, 2016</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog