import React from 'react'

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
            <div className="footer-logo">
                <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <img src="./public/images/logo.png" alt="Logo" className="logo-img" />
                </a>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo in repudiandae, consequatur fugiat et optio quasi tempore quis omnis sapiente vero animi qui ad error quisquam alias corrupti est possimus.</p>
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <h5>Information</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0">About Us</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Classes</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Blog</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Helpful Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Services</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Supports</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Terms & Conditions</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer