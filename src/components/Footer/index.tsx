const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer-top section-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 footer-contact'>
                            <h3>Vitmeds Pharmaceuticals Pvt. Ltd.</h3>
                            <p>
                            HD-264,Oberoi Commerz II,20th Floor,
                                <br />
                                CTS no. 95, 4 B 3 & 4 590, Off W. E. Highway,
                                <br />
                                Oberoi Garden City, Goregaon East(D2), Mumbai,MH 400063
                                <br />
                                <br />
                                <strong>Phone:</strong> +91 77719-54902
                                <br />
                                <strong>Email:</strong> Vitmedspharma@gmail.com
                            </p>
                        </div>

                        <div className='col-lg-3 col-md-6 footer-links'>
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{' '}
                                    <a href='#home'>Home</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{' '}
                                    <a href='#about'>About us</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{' '}
                                    <a href='#products'>Products</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-right'></i>{' '}
                                    <a href='#contactus'>Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-3 col-md-6 footer-links'>
                            <h4>Our Social Networks</h4>
                            <p>Connect with us</p>
                            <div className='social-links mt-3'>
                                <a href='#' className='twitter'>
                                    <i className='bx bxl-twitter'></i>
                                </a>
                                <a href='#' className='facebook'>
                                    <i className='bx bxl-facebook'></i>
                                </a>
                                <a href='#' className='instagram'>
                                    <i className='bx bxl-instagram'></i>
                                </a>
                                <a href='#' className='linkedin'>
                                    <i className='bx bxl-linkedin'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container footer-bottom'>
                <p className='m-0 text-center'>
                    &copy; Copyright {new Date().getFullYear()}{' '}
                    <strong>
                        <span>Vitmeds</span>
                    </strong>
                    . All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
