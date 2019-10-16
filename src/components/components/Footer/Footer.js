import React from 'react'
import './Footer.css'

const Footer = () => (
    <footer className="my-footer">
        <div className="container">
            <div className="row">
            <div className="col-sm-4 text-center">
                <h5> About Zomato Restaurant </h5>
                <ul>
                    <li> 
                        <a className="text-info" href="/#"> About </a> 
                    </li>
                    <li>
                        <a className="text-info" href="/#"> Contact Us </a>
                    </li>
                </ul>
            </div>
            <div className="col-sm-4 text-center">
                <h5> Support </h5>
                <ul>
                    <li> 
                        <a className="text-info" href="/#"> FAQ </a> 
                    </li>
                    <li>
                        <a className="text-info" href="/#"> Help desk </a>
                    </li>
                    <li>
                        <a className="text-info" href="/#"> Forums </a>
                    </li>
                </ul>
            </div>
            <div className="col-sm-4 text-center">
                <h5> Download App </h5>
                <ul>
                    <li> 
                        <a className="text-info" href="/#"> Google Play </a> 
                    </li>
                    <li>
                        <a className="text-info" href="/#"> App Store </a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        <div className="social-networks">
            <a className="twitter" href="/#">
                <i className="fa fa-twitter"></i>
            </a>
            <a className="facebook" href="/#">
                <i className="fa fa-facebook-official"></i>
            </a>
            <a className="google" href="/#">
                <i className="fa fa-google-plus"></i>
            </a>
        </div>
        <div className="text-center footer-copyright">
            <p> Copyright &copy; 2019 Zomato Restaurant </p>
        </div>
    </footer>
)

export default Footer