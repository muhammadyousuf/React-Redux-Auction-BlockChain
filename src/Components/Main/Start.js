import React, { Component } from 'react';
import './Intro.css';



class Start extends Component {
    render() {
        return (
            <div className="container-fuild"   >
                <h1 className="startHeader" >Auctionity</h1>
                <h3 className="startSubHeader" >The world's largest blockchain auction house for NTFs</h3>
                <div className="row topStyle justify-content-center"  >
                    <div className="col-md-5 col-sm-5 col-xs-6 paperDiv" >
                        <img src="https://www.auctionity.com/wp-content/uploads/2018/09/Icone-Etoile.png" alt="" className="scale-with-grid imgCenter" />
                        <h1 className="divHeader" >Creating auctions and bidding</h1>
                        <p className="divParagrph" >Auctionity Saleroom</p>
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-6 paperDivTwo" >
                        <img src="https://www.auctionity.com/wp-content/uploads/2018/09/Icone-cour.png" alt="" className="scale-with-grid imgCenter" />
                        <h1 className="divHeader">Community Rewards</h1>
                        <p className="divParagrph">Auctionity Club</p>
                    </div>

                </div>
            </div>
        );
    }
}
export default Start;