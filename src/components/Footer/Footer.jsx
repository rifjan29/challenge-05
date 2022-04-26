import React from 'react'
import Facebook from '../../assets/icon/icon_facebook.svg'
import Instagram from '../../assets/icon/icon_instagram.svg'
import Mail from '../../assets/icon/icon_mail.svg'
import Twitter from '../../assets/icon/icon_twitter.svg'
import Twitch from '../../assets/icon/icon_twitch.svg'
import Logo from '../../assets/img/logo.svg';

const Footer = () => {
    return (
    <>
        <footer>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <ul className="list-footer">
                            <li> <a href="#services">Our services</a></li>
                            <li> <a href="#whyus">Why Us</a></li>
                            <li> <a href="#testimonial">Testimonial</a></li>
                            <li> <a href="#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <p>Connect with us</p>
                        <div className="social">
                            <div className="circle">
                                <a href="#">
                                    <img src={Facebook} />
                                </a>
                            </div>
                            <div className="circle">
                                <a href="#">
                                    <img src={Instagram} />
                                </a>
                            </div>
                            <div className="circle">
                                <a href="#">
                                    <img src={Twitter} />
                                </a>
                            </div>
                            <div className="circle">
                                <a href="#">
                                    <img src={Mail} />
                                </a>
                            </div>
                            <div className="circle">
                                <a href="#">
                                    <img src={Twitch} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <p>Copyright Binar 2022</p>
                        <a href="/">
                            <img src={Logo} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer