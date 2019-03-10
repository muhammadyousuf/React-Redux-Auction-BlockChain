import React, {Component} from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/car.jpg'
import bike from '../../images/bike.jpg'
import computer from '../../images/computer.jpg'
import house from '../../images/house.jpg'
import {VALUE} from "../../Constants";
import Loader, {HIDE} from "../../loader";
import {LOADING} from "../../loader";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            status : LOADING
        }
    }

    item(data) {

        console.log("sending data ==> " + JSON.stringify(data))
        this.props.history.push({
            pathname: '/Item',
            state: {
                data: data,


            }
        })
    }

    componentDidMount() {



        //get the auction Data

        this.props.web3Prop.eth.getCoinbase((err, account) => {
            console.log("account dashboard==> " + account)

            this.props.contractProp.deployed().then((instance) => {
                console.log("address dashboard==> " + instance.address)

                instance.auctionsCount().then((auctionsCount) => {
                    console.log("auctionsCount ==> " + auctionsCount)
                    if(auctionsCount <=0){
                        this.setState({
                            status:HIDE
                        })
                    }else{

                        let tempAuctions = []
                        for (var i = 1; i <= auctionsCount; i++) {
                            instance.auctions(i).then((auction) => {
                                console.log("checking ==> " + auction)
                                let auctionObj = {
                                    auctionId: Number(auction[0]),
                                    auctionName: auction[1],
                                    beneficiary: auction[2],
                                    highestBidder: auction[3],
                                    highestBid: Number(auction[4])/VALUE,
                                    ended: auction[5],
                                    isDelivered: auction[6],
                                    firebaseHash: auction[7]
                                }
                                tempAuctions.push(auctionObj)

                                this.setState({
                                    data:tempAuctions,
                                    status:HIDE
                                },()=>{
                                    console.log("data updated ==> " + this.state.data.length)
                                })
                            })
                        }
                    }
                })
            })
        })
    }


    render() {

        return (
            <div style={{overflowX: 'hidden'}}>
                <div className="coverImage" >
                <Loader status={this.state.status}/>

                <Header {...this.props} />
                </div>
                <div>
                    <h1 className="dashHeAD" >Online Decentralize Auction</h1>
                    <p className="deshPara" >You Can Browse Auction, Bid Auction and Send Either</p>
                </div>
                <div className="container">
                    <div className="row hollDiv">


                        {
                            this.state.data.map((data,index) => {
                                return (<div key = {index} className="col-md-4 col-sm-12 col-xs-12 ">
                                    <div className="listHead">



                                    <div className="containers">
                                        <img src={`${car}`} alt="Avatar" className="image"/>


                                    </div>
                                    <p className="headPara">{data.auctionName}</p>
                                    <div className="listFoot ">
                                  {/*      <p className="footendDate">Start Date</p>
                                        <p className="footPrice" >17/02/2019 01:00 AM</p>*/}
                                        <p className="footendDate">Auction Status</p>
                                        <p className="statusCheck" >{data.ended ? "Closed" : "Open"}</p>
                                        <p className="headDate">Highest Bid = {data.beneficiary === data.highestBidder ? "Bid Yet Not Started Start your bid at min " + data.highestBid : data.highestBid} Ether</p>
                                      {/*  <p className="footendDate">Start Date:</p>
                                        <p className="footPrice">17/02/2019 01:00 AM</p>*/}
                                        <div className="text" onClick={()=>{
                                            this.item(data)
                                        }}>Detail</div>


                                    </div>
                                    </div>
                                </div>)
                            })
                        }


                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;