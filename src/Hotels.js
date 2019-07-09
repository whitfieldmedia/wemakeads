import React from 'react';
import './styles/scss/hotels.scss';

function Hotels() {
    return (
        <div id="hotelPage">
            <div id="huntsville">
                <h1 className="hotelHeader">HUNTSVILLE</h1>
                <div id="huntRow">
                    <iframe title="hotel Homewood Huntsville" frameBorder="0" id="huntHomewood" src="https://player.vimeo.com/video/310377975" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>
                <div id="huntRowSmall">
                    <iframe title="otbx" id="otbx" className="huntVidSmall" frameBorder="0" src="https://player.vimeo.com/video/297397523" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>                       
                    <iframe title="btr" id="btr" className="huntVidSmall" frameBorder="0" src="https://player.vimeo.com/video/297397394" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>                    
            </div>
            <div id="grenada">
                <h1 className="hotelHeader">GRENADA</h1>
                <div id="grenBigRow">
                    <iframe title="hamptonGrenada" id="grenHamp" frameBorder="0" src="https://player.vimeo.com/video/246616421"></iframe>                
                </div>
                <div id="grenSmallRow">
                    <iframe title="T&Z wings" id="tz" className="grenSmallVid" frameBorder="0" src="https://player.vimeo.com/video/310376432" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>                        
                    <iframe title="sportsCenter" id="sports" className="grenSmallVid" frameBorder="0" src="https://player.vimeo.com/video/310375946" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                    <iframe title="Spencer's" id="spencer" className="grenSmallVid" frameBorder="0" src="https://player.vimeo.com/video/257173453" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>
            </div>

            <div id="hernando">
                <h1 className="hotelHeader" id="hernHeader">HERNANDO</h1>
                <div id="hernRow1">
                    <iframe title="hampton hernando" id="hernHamp" className="hernHamp" frameBorder="0" src="https://player.vimeo.com/video/310381133" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                    <div id="hernSmallRow">
                        <iframe title="buon cibo" className="hern" id="hernCibo" frameBorder="0" src="https://player.vimeo.com/video/290718347" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                        <iframe title="ac steakhouse" className="hern" id="hernAC" frameBorder="0" src="https://player.vimeo.com/video/290718176" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotels