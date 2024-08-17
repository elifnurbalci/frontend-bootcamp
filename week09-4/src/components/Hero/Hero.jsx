import React from 'react'

function Hero() {
  return (
    <div>
        <div id="hero" className="hero-section">
          <div className="hero">
              <img className="hero-image" src="./public/images/hero-man.jpg" alt="Hero Man" />
              <div className="hero-text">
                  <div className="tag">POWERFULL</div>
                  <h1>Group <br />Practice <br />With Trainer</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum quibusdam iste, dicta praesentium error expedita at dolorum ea eaque obcaecati rem est quas numquam alias illum molestias illo sapiente.</p>
                  <div className="hero-button">
                          <button id="blue-button" className="blue-button">Sign Up</button>
                          <button id="link-button" className="link-button">Details</button>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Hero