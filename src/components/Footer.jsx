import React from 'react';
function Footer() {
    return (
        <footer className="footer">
            <div className="Container">
                <div className="name-slogan">
                    <p>Mysore Motors</p>
                    <p>Power Drive</p>
                </div>
                <div className="separation slogan"></div>
                <div className="details">
                    <a href="#">NEARBY STORE</a>
                    <a href="#">FEEDBACK</a>
                    <a href="#">MAP</a>
                </div>
                <div className="separation"></div>
            </div>
            <div className="contact">
                <div className="social-links">
                    <a href="#" className="social-links Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-links Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-links Linkedin"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="social-links Twitter"><i className="fab fa-twitter"></i></a>
                </div>
                <div className="contact-info">
                    <p>Phone: 1234567890</p>
                    <p>Address: 123 Main St, Anytown, USA</p>
                    <p>Gmail:-ffkefkf@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;