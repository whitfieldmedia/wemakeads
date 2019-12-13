import React from 'react';
import charlie from './images/charlieHeadshot.jpeg';
import buddy from './images/buddy.jpeg';
import lori from './images/LoriHeadshot.jpg';
import rachel from './images/RachelHeadshot.jpeg';
import ashley from './images/ashleyHeadshot.jpg';
import joseph from './images/JosephHeadshot.jpg';
import chris from './images/ChrisHeadshot.jpeg';
import spencer from './images/spencieHeadshot.jpg';
import steve from './images/steve_headshot.jpg';
import { Helmet } from 'react-helmet';
import './styles/css/team.css';

class OurTeam extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div id="team-page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Meet Our Team | Whitfield Media </title>
                    <link rel="canonical" href="https://www.wemakeads.com/our-team"/>
                    <meta name="description" content="Whitfield Media is filled with very talented people to produce products that connects brands with people and guaranteed you'll love. " />
                </Helmet>
                <div className="teamHeader">Meet Our Team!</div>
                <div id="teamContainer">
                    <section id="charlie" className="teamMember">
                        <h1 className="teamName">Charlie Whitfield, Owner</h1>
                        <p className="teamText"><img id="charlieHeadshot" className="headshot" src={charlie} alt="Charlie"/>
                                Charlie Whitfield was born and raised in Grenada, Ms. He attended Delta State with a focus in marketing & real estate. Today, Charlie owns and operates Whitfield Media. <br/> <br/>
                                Charlie is trained to handle your marketing for radio, television, and digital. Since the beginning of his advertising career, he has produced hundreds of commercials for his clients, and he offers over 30 different billboards for his clients around the Grenada area. <br/> <br/>
                                A self-taught videographer, Charlie has used multiple video cameras and set-ups throughout his career, including a drone (which he is certified to fly). He is also very proficient in adobe programs such as Premiere and After Effects. <br/> <br/>
                            Charlie maintains quality through the desire to keep up with the latest innovations of commercial production. With that said, he owns a production studio to produce creative ads for his clients. In addition, he updates his camera and video equipment on a constant basis.</p>
                    </section>
                    <section id="buddy" className="teamMember">
                        <h1 className="teamName">Jim Burt, Production Coordinator</h1>
                        <p className="teamText">   <img id="buddyHeadshot" className="headshot" src={buddy} alt="Jim"/>
                            Jim Burt began his film education at the University of North Texas, working as an editing intern at North Texas News (a student run program). Following, he received his degree in Communications at Delta State University in 2013. In addition, he served an assistantship at University of Mississippi, which involved directing/editing short films for an acting class in 2015.<br/> <br/>
                            Jim is a well-rounded video editor, having mastered all adobe editing programs (Premiere, After Effects, Photoshop, Audition) and Final Cut Pro X. He has worked with Red Cameras, Blackmagic, and an assortment of DSLRs. Jim films and edits approximately 20 commercials a month.<br/> <br/>
                            Jim's passion lies in making videos presentational. With that, several articles have been published in regards to Jim's work. He is an active videographer for McDonald's corporate and has worked with musicians like Steve Azar. Also, he designed the Kirk Auto Ole Miss Fan Cam and filmed events at the Grammy Museum Mississippi. His nickname is Buddy.</p><br/>
                    </section>
                    <section id="lori" className="teamMember">
                        <h1 className="teamName">Lori Whitfield, Co-Owner & Office Manager </h1>
                    <p className="teamText">  <img id="loriHeadshot" className="headshot" src={lori} alt="Lori"/>
                            Lori Whitfield is co-owner of Whitfield Media and the office manager. She received her bachelor’s in Business Administration & CIS.<br/> <br/>
                            Lori handles communications between our clients' accounts and the stations that run the ads. She also regulates scheduling, co-op approval, accounts payable, and accounts receivable.</p>
                    </section>

                    <section id="rachel" className="teamMember">
                    <h1 className="teamName">Rachel Green, Market Research & Social Media Specialist</h1>
                        <p className="teamText"> <img id="rachelHeadshot" className="headshot" src={rachel} alt="Rachel"/>
                            Rachel conducts market research for our clients through the use of geographical information software.  She then develops that research into informational reports that contain demographic and market potential data.<br/> <br/>
                            Rachel Green is currently a graduate student in the MBA/MPAC dual enrollment program at Delta State University. She graduated in 2016 with a bachelor’s degree in business administration and a concentration in accountancy.  </p><br/>
                    </section>
                    <section id="ashley" className="teamMember">
                        <h1 className="teamName">Ashley Henson, Social Media Organizer</h1>
                        <p className="teamText"><img id="ashleyHeadshot" className="headshot" src={ashley} alt="Ashley"/>
                            Ashley Henson gives a helping hand in managing our clients' social media pages. He has been well trained in digital marketing and social media advertising.<br/><br/>
                            He maintains relationships with clients in the Memphis and North Mississippi area. He will travel to check on them and make sure their digital marketing is effective. <br/><br/>
                            He's a fun-loving/diehard/crazy Ole Miss fan.....and his nickname is Bison.</p><br/>
                    </section>
                    <section id="joseph"  className="teamMember">
                    <h1 className="teamName">Joseph Cotton, Graphic Designer</h1>
                    <p className="teamText"><img id="josephHeadshot" className="headshot" src={joseph} alt="Joseph"/>
                            Joseph is a magna cum laude graduate of Mississippi Valley State University, where he majored in Art with an emphasis in Visual Communication. He has spent several years in newspaper/magazine publication.<br/><br/>
                            He possesses an advanced skill set in Adobe Creative Cloud applications, such as Photoshop, Illustrator and Indesign.<br/><br/>
                            Joseph designs billboards, logos, and print ads for many of our clients. </p><br/>
                    </section>        
                    <section id="chris" className="teamMember">
                        <h1 className="teamName">Chris Reed, Company Affiliate</h1>
                        <p className="teamText"> <img id="chrisHeadshot" className="headshot" src={chris} alt="Chris Reed"/>
                            Chris Reed collaborates with us for a multitude of different projects and creative processes that are required in making a television commercial. He also provides acting and suggestions for on-location filming.<br/> <br/>
                            Chris has experience in national advertising and television production and has even appeared on National Television commercials himself.<br/><br/>
                            You may also recognize Chris from History Channel’s Top Shots, which he won first place overall in the second season of the show.  He also appeared on the Sportsman Channel's Total Outdoorsman.<br/><br/>
                            Currently, he runs his own business (Chris Reed Dozer Work) in Grenada, MS.</p><br/>
                    </section>     
                    <section id="spencie" className="teamMember">
                        <h1 className="teamName"> Spencer Backman, Web Developer </h1>
                        <p className="teamText">
                            <img className="headshot" id="spencieHeadshot" src={spencer} alt="Spencer Backman" />
                            Spencer Backman is our Web Developer and Designer. 
                            He specializes in building modern and clean websites using Html, Css, Javascript, and React. 
                            He analyzes and understands our clients to translate their needs into easy to use and visually appealing websites that get results.
                        </p>
                    </section>       
                    <section id="steve" className="teamMember">
                        <h1 className="teamName"> Steve Shelton, Business Development Partner </h1>
                        <p className="teamText">
                            <img src={steve} className="headshot" alt="Steve Shelton"/>
                            Steve J. Shelton was born in Fayetteville, Tn. He started Huntsville Radio at 16 at WAAY in Huntsville, Alabama. He started working full time in radio after high school. In 1982 Steve joined Semi Conductor/Electro mechanical Rep business. In 1987 Steve started South East Technical Group (STG), he sold the business in 2007. 
                            Since 2007 Steve has owned and started various businesses, A Golds Gym, A Home Building Business, Charter Aviation company, a Bakery, Eatery Brewery, and Cigar Bar/store biz.
                            From 2009-2016 Steve served as the managing partner of the Ark-La-Ms Radio Group until they closed in 2016. Since then Steve has helped us grow our business into the Huntsville, Alabama area.
                        </p>
                    </section>                  
                </div>
            </div>
        )
    }
}

export default OurTeam