import React, {Component} from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/car.jpg'
import bike from '../../images/bike.jpg'
import computer from '../../images/computer.jpg'
import house from '../../images/house.jpg'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    item(data) {

        console.log("sending data ==> " + JSON.stringify(data))
        this.props.history.push({
            pathname: '/Item',
            state: {
                data: data
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
                    let tempAuctions = []
                    for (var i = 1; i <= auctionsCount; i++) {
                        instance.auctions(i).then((auction) => {
                            console.log("checking ==> " + auction)
                            let auctionObj = {
                                auctionId: auction[0].toNumber(),
                                auctionName: auction[1],
                                beneficiary: auction[2],
                                highestBidder: auction[3],
                                highestBid: auction[4].toNumber(),
                                ended: auction[5],
                                isDelivered: auction[6],
                                firebaseHash: auction[7]
                            }
                            tempAuctions.push(auctionObj)

                            this.setState({
                                data:tempAuctions
                            },()=>{
                                console.log("data updated ==> " + this.state.data.length)
                            })
                        })
                    }

                })
            })
        })
    }


    render() {

        return (
            <div style={{overflowX: 'hidden'}}>
                <Header {...this.props} />
                <div className="container">
                    <div className="row hollDiv">


                        {
                            this.state.data.map((data,index) => {
                                return (<div key = {index} className="col-md-4 col-sm-12 col-xs-12 ">
                                    <div className="listHead">
                                        <p className="headPara">{data.auctionName}</p>
                                        <p className="headDate">{data.highestBid} Ether</p>
                                    </div>
                                    <div className="containers">
                                        <img src={`${car}`} alt="Avatar" className="image"/>
                                        <div className="middle">
                                            <div className="text" onClick={()=>{
                                                this.item(data)
                                            }}>Detail</div>
                                        </div>
                                    </div>

                                    <div className="listFoot ">
                                        <p className="footendDate">Start Date:</p>
                                        <p className="footPrice">17/02/2019 01:00 AM</p>

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