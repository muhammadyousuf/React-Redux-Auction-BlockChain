import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <div className="container-fuild"  >
                <div className="footerTop"  ></div>
                <div  >
                    <div className="row"  >

                        <div className="superFooter">
                            <div className="row justify-content-center">
                                <div className="col-md-2 col-sm-4 col-xs-5" >
                                    <img src="https://www.auctionity.com/wp-content/uploads/2018/09/Groupe-3330.png" alt="" className="alignnone size-full wp-image-185 aligncenter imageIconStyle" />
                                    <p className="paraStyle" >Trustless</p>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-5" >
                                    <img src="https://www.auctionity.com/wp-content/uploads/2018/09/groupe-33.png" alt="" className="alignnone size-full wp-image-185 aligncenter imageIconStyle" />
                                    <p className="paraStyle">Real-time auctions</p>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-5" >
                                    <img src="https://www.auctionity.com/wp-content/uploads/2018/09/Groupe-336.png" className="alignnone size-full wp-image-185 aligncenter imageIconStyle" alt="" />
                                    <p className="paraStyle">Open source</p>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-5" >
                                    <img src="https://www.auctionity.com/wp-content/uploads/2018/09/Groupe-339.png" alt="" className="alignnone size-full wp-image-185 aligncenter imageIconStyle" />
                                    <p className="paraStyle">Community auctions</p>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-5" >
                                    <img src="https://www.auctionity.com/wp-content/uploads/2018/09/Groupe-334.png" alt="" className="alignnone size-full wp-image-185 aligncenter imageIconStyle" />
                                    <p className="paraStyle">Free</p>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-5" >
                                    <img src="https://www.auctionity.com/wp-content/uploads/2018/09/Groupe-345.png" alt="" className="alignnone size-full wp-image-185 aligncenter imageIconStyle" />
                                    <p className="paraStyle">Live video</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="footer">
                        <div className="row justify-content-center" >
                            <div className="col-md-3 col-xs-12 col-sm-6 col-xl-3 col-lg-3">
                                <img src="https://www.auctionity.com/wp-content/uploads/2018/09/m%C3%A9daille_NFT.png" alt="" className="imgIcon" />
                                <p className="footerPara" >The world’s largest blockchain auction house for cryptocollectibles. Dapp on Ethereum blockchain to auction NFTs in Ether.</p>
                            </div>
                            <div className="col-md-3 col-xs-12 col-sm-6 col-xl-3 col-lg-3" >
                                <h1 className="footerHeaging" >Customer Service</h1>
                                 <ul>
                                    <li className="list">Buyer Guide</li>
                                    <li className="list">Become a Pro Seller</li>
                                    <li className="list">Sell on Kaymu</li>
                                    <li className="list">FAQ</li>
                                    <li className="list">Sitemap</li>
                                    <li className="list">Seller Tips Platform</li>
                                    <li className="list">PAYE Charges</li>
                                    <li className="list">eCommerce Report</li>
                                    <li className="list">Guides</li>
                                </ul>                            </div>
                            <div className="col-md-3 col-xs-12 col-sm-6 col-xl-3 col-lg-3">
                                <h1 className="footerHeaging"  >About US</h1>
                                <ul>
                                    <li className="list">Privacy Policy</li>
                                    <li className="list">Terms and Conditions</li>
                                    <li className="list">Jobs</li>
                                    <li className="list">Press Center</li>
                                    <li className="list">Home</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-xs-12 col-sm-6 col-xl-3 col-lg-3">
                                <h1 className="footerHeaging  " >Contact</h1>
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

        );
    }
}
export default Footer;