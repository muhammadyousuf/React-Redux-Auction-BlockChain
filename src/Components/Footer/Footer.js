import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <div className="container-fuild  ">
                <div className="footerTop" ></div>
                <div className="row">
                    <div className="row">
                        <div className="footer">
                            <div className="row" >
                                <div className="col-md-4 col-xs-4 col-sm-4 col-xl-4 col-lg-4" >
                                    <h1 className="footerHeaging " >Customer Service</h1>
                                                                </div>
                                <div className="col-md-4 col-xs-4 col-sm-4 col-xl-4 col-lg-4">
                                    <h1 className="footerHeaging"  >About US</h1>
                                </div>
                                <div className="col-md-4 col-xs-4 col-sm-4 col-xl-4 col-lg-4">
                                    <h1 className="footerHeaging  " >Contact</h1>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-md-4 col-xs-4 col-sm-4 col-xl-4 col-lg-4" >
                                    <ul>
                                        <li className="list">Buyer Guide</li>
                                        <li className="list">Become a Pro Seller</li>
                                        <li className="list">Sell on Kaymu</li>
                                        <li className="list">FAQ</li>
                                        <li className="list">Sitemap</li>
                                        <li className="list">Seller Tips Platform</li>
                                        <li className="list">PAYE Charges</li>
                                        <li className="list">eCommerce Report</li>
                                        <li className="list">Guides</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-xs-4 col-sm-4 col-xl-4 col-lg-4" >
                                    <ul>
                                        <li className="list">Privacy Policy</li>
                                        <li className="list">Terms and Conditions</li>
                                        <li className="list">Jobs</li>
                                        <li className="list">Press Center</li>
                                        <li className="list">Home</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-xs-4 col-sm-4 col-xl-4 col-lg-4" >
                                    <ul>
                                        <li className="list">Facebook</li>
                                        <li className="list">Twitter</li>
                                        <li className="list">WhatsApp</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Footer;