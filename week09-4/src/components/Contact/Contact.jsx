import React from 'react'

function Contact() {
    return (
        <div>
            <div id="contact-us" className="contact-us">
                <div className="container">
                    <div className="classes-title">
                        <h2>CONTACT US</h2>
                        <div className="divider"> </div>
                        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
                    </div>
                    <div className="class-content">
                        <div className="class-info">
                            <p><span>Mobile Number</span>  +44123456786<br /></p>
                            <p><span>Email Address</span>  info@test.com</p>
                            <br />
                            <h3>Make An Appoinment</h3>
                            <form>
                                <div className="form-group row">
                                    <div className="col-sm-15">
                                        <input type="name" className="form-control" id="inputName" placeholder="Your Name" autoComplete="off" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-15">
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Your Email" autoComplete="off" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-15">
                                        <input type="message" className="form-control" id="inputMessage" placeholder="Your Message" autoComplete="off" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="class-image">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188562.45187839557!2d-151.5668398155272!3d-16.733663385699526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76bd9d1390e3f3bb%3A0xf0b2b2f0506a0cc0!2sJardin%20Du%20Corail%20-%20Coral%20garden!5e0!3m2!1sen!2suk!4v1722698900692!5m2!1sen!2suk" 
                                width="100%" 
                                height="360px" 
                                style={{border: '0', borderRadius: '5px'}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact