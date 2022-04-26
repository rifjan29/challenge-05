import React from 'react';
import Logo from '../../assets/img/logo.svg';

const Navbar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header justify-content-between">
                        <h3>BCR</h3>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#services">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#whyus">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">FAQ</a>
                            </li>
                        </ul>
                        <div className="button-signup">
                            <button className="btn btn-master btn-primary">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar