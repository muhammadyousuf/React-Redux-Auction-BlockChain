import React, { Component } from 'react';
import './style.css';



class Introduction extends Component {
    render() {
        return (
            <div className="container" >
                <h1 className="mainHeader" >Community Rewards</h1>
                <h3 className="subHeader" >Join the community to promote auctions and earn ETH rewards!</h3>
                <div className="row justify-content-center" >
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3" >
                        <img src="https://www.auctionity.com/wp-content/uploads/2018/09/ETH.png" alt="" className="scale-with-grid" width="75" height="75" />
                        <h5 className="heading">Auctioneer</h5>
                        <p className="des">
                            Get 20% of the community reward by encouraging NFT holders to sell their Crypto-Assets at auctions
                 </p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3" >
                        <img src="https://www.auctionity.com/wp-content/uploads/2018/09/Gavel.png" alt="" className="scale-with-grid" width="75" height="75" />
                        <h5 className="heading" >Bidders’ referrers</h5>

                        <p className="des" >Promote the auction to get 30% of the community reward by sharing the auction link</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3" >
                        <img src="https://www.auctionity.com/wp-content/uploads/2018/09/coupe.png" alt="" className="scale-with-grid" width="75" height="75" />
                        <h5 className="heading">Winner’s referrer</h5>
                        <p className="des" >Get 30% for bringing the winner of the auction (last bid)</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3" >
                        <img src="https://www.auctionity.com/wp-content/uploads/2018/09/micro.png" alt="" className="scale-with-grid" width="75" height="75" />
                        <h5 className="heading">Auctioneer</h5>
                        <p className="des">Get 20% of the reward by animating the auction with a video livestream in the Auctionity Saleroom</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Introduction;