import React from 'react'

function Trainers() {
  return (
    <div>
      <div id="trainer" className="trainer">
          <div className="container" >
              <div className="classes-title">
                  <h2>OUR BEST TRAINERS</h2>
                  <div className="divider"> </div>
                  <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
              </div>
              <div className="trainers">
                  <div className="trainer-info">
                      <div className="trainer-bg"></div>
                      <img src="./public/images/trainer1.jpg" alt="trainer1" />
                      <div className="name-card">
                          <h5>Rose Doe</h5>
                          <h6>Cardio Trainer</h6>
                      </div>
                  </div>
                  <div className="trainer-info">
                      <div className="trainer-bg"></div>
                      <img src="./public/images/trainer2.jpg" alt="trainer2" />
                      <div className="name-card">
                          <h5>John Doe</h5>
                          <h6>Cardio Trainer</h6>
                      </div>
                  </div>
                  <div className="trainer-info">
                      <div className="trainer-bg"></div>
                      <img src="./public/images/trainer3.jpg" alt="trainer3" />
                      <div className="name-card">
                          <h5>Jane Doe</h5>
                          <h6>Cardio Trainer</h6>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Trainers