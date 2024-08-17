import React from 'react'

function Review() {
  return (
    <div>
      <div className="review">
        <div className="container">
            <div className="classes-title">
                <h2>REVIEW CLIENT</h2>
                <div className="divider"> </div>
                <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
            </div>
            <div className="review-client">
                <div className="client">
                    <div className="client-info">
                        <img src="./public/images/client1.jpg" alt="client1" className="client-image" />
                        <div className="client-details">
                            <h6 className="client-name">Diet Expert</h6>
                            <p className="client-title">CFO</p>
                        </div>
                    </div>
                    <div className="client-review">
                        <div className="review-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus nulla omnis qui nostrum optio repellat ab. Quam consequatur assumenda, dolor quibusdam, veritatis odio sequi porro nemo placeat, quos architecto!</p>
                        </div>
                        <div className="shadow-left"></div>
                        <div className="shadow-right"></div>
                    </div>
                </div>
                <div className="client">
                    <div className="client-info">
                        <img src="./public/images/client2.jpg" alt="client2" className="client-image" />
                        <div className="client-details">
                            <h6 className="client-name">Cardio Trainer</h6>
                            <p className="client-title">CEO</p>
                        </div>
                    </div>
                    <div className="client-review">
                        <div className="review-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere delectus nulla omnis qui nostrum optio repellat ab. Quam consequatur assumenda, dolor quibusdam, veritatis odio sequi porro nemo placeat, quos architecto!</p>
                        </div>
                        <div className="shadow-left"></div>
                        <div className="shadow-right"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Review