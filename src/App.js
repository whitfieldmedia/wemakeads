import React from 'react';
import Billboards from './Billboards';
import Blog from './Blog';
import Contact from './Contact';
import DigitalMarketing from './DigitalMarketing';
import Footer from './Footer';
import GraphicDesign from './GraphicDesign';
import Home from './Home';
import Hotels from './Hotels';
import Nav from './Nav';
import OurTeam from './OurTeam';
import VideoGallery from './VideoGallery';
import VideoProduction from './VideoProduction';
import WebDevelopment from './WebDevelopment';
import { Switch, Route } from 'react-router-dom';
import './styles/css/styles.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/billboards" component={Billboards} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/digital-marketing" component={DigitalMarketing} />
        <Route path="/graphic-design" component={GraphicDesign} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/our-team" component={OurTeam} />
        <Route path="/video-gallery" component={VideoGallery} />
        <Route path="/video-production" component={VideoProduction} />
        <Route path="/web-development" component={WebDevelopment} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
