import React from 'react'

function Purchase() {
  return (
    <div>
      <div className="purchase">
        <div className="container">
            <div className="classes-title">
                <h2>PURCHASE FROM US</h2>
                <div className="divider"> </div>
                <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
            </div>
            <div className="purchases">
                <div className="purchase-info">
                    <img src="./public/images/purchase1.jpg" alt="purchase1" /> 
                    <h5>Kettlebell (5kg)</h5>
                    <h6><span>£89.99</span> - £59.99</h6>
                    <div className="cart">
                        <i className="bi bi-cart-plus"></i>
                        <button>Add To Cart</button>
                    </div>
                </div>
                <div className="purchase-info">
                    <img src="./public/images/purchase2.jpg" alt="purchase2" />
                    <h5>Treadmill</h5>
                    <h6><span>£89.99</span> - £59.99</h6>
                    <div className="cart">
                        <i className="bi bi-cart-plus"></i>
                        <button>Add To Cart</button>
                    </div>
                </div>
                <div className="purchase-info">
                    <img src="./public/images/purchase3.jpg" alt="purchase3" />
                    <h5>Adjustable Dumbbell</h5>
                    <h6><span>£89.99</span> - £59.99</h6>
                    <div className="cart">
                        <i className="bi bi-cart-plus"></i>
                        <button>Add To Cart</button>
                    </div>
                </div>
                <div className="purchase-info">
                    <img src="./public/images/purchase4.jpg" alt="purchase4" />
                    <h5>Kettlebell (3kg)</h5>
                    <h6><span>£89.99</span> - £59.99</h6>
                    <div className="cart">
                        <i className="bi bi-cart-plus"></i>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase