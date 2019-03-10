import React, { Component } from 'react';
import './MyAuctionList.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/bike.jpg'
import { MdDelete, MdEdit, MdVisibility } from 'react-icons/md';
import '../Dashboard/Dashboard.css';
import { Dialog, FlatButton } from 'material-ui';
import {HIDE, LOADING} from "../../loader";
import {ACCOUNT_ADDRESS, VALUE} from "../../Constants";

class MyAuctionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            open: false,
            title:'Bike',
            description:'A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of car say they run primarily on roads, seat one to eight people, have four tires, and mainly transport people rather than goods. Cars became widely available in the early 20th century',
            price:'5 Ether',
            category:'Honda',
            status : LOADING,
            activeAccount: localStorage.getItem(ACCOUNT_ADDRESS),
        }
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
                            if(auction[2].toLowerCase() == this.state.activeAccount.toLowerCase()){
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
                            }

                        })
                    }

                })
            })
        })
    }


    item() {
        console.log('item', this.props.history)
        this.props.history.push('/Item')
    }
    handleClose() {
        this.setState({ open: false });
    };
    EditData() {
        console.log('Edit');
        this.setState({ open: false });
    }
    handleOpen = () => {
        this.setState({ open: true })
    }
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => this.handleClose()} />,
            <FlatButton
                label="Update"
                primary={true}
                keyboardFocused={true}
                onClick={() => this.EditData()}
                disabled={this.state.button}
            />,
        ];
        return (
            <div style={{ overflowX: 'hidden', backgroundColor: '#fff' }}  >
                <div className="coverImage" >
                    <Header />
                </div>
                <div>
                    <h1 className="dashHeAD" >Online Decentralize Auction</h1>
                    <p className="deshPara" >You Can Browse Auction, Bid Auction and Send Either</p>
                </div>
                <div className="container">
                    <div className="row hollDiv" >
                        {
                            this.state.data.map((data, index) => {
                                return (
                                    <div className="col-md-4 col-sm-12 col-xs-12  " key={index} >
                                        <div className="listHead" >
                                            <div className="containers">
                                                <img src={`${car}`} alt="Avatar" className="image" />
                                            </div>
                                            <p className="headPara">Bike</p>
                                            <div className="listFoot " >
                                                <p className="footendDate">Start Date</p>
                                                <p className="footPrice" >17/02/2019 01:00 AM</p>
                                                <p className="footendDate">Auction Status</p>
                                                <p className="statusCheck" >Open</p>
                                                <p className="headDate">Highest Bid = 5 Ether</p>
                                                <div style={{ textAlign: 'center' }} >
                                                    <div className="iconBtn" onClick={this.item.bind(this)} ><MdVisibility size={25} style={{ marginTop: 5 }} /></div>
                                                    <div className="iconBtn" onClick={this.item.bind(this)} ><MdDelete size={25} style={{ marginTop: 5 }} /></div>
                                                    <div className="iconBtn" onClick={this.handleOpen} ><MdEdit size={25} style={{ marginTop: 5 }} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>


                </div>
                <Dialog
                    title="AUCTION EDIT"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onClick={this.handleClose}
                    autoScrollBodyContent={false}
                    titleStyle={{ color: 'gray',  fontFamily: 'roboto' }}
                >
                    <div className="EdittextBox" >
                        <label htmlFor="title" className="labelStyle">Title:</label>
                        <input type="text" onChange={(event) => { this.setState({ title: event.target.value }) }} className="form-control" id="title" value={this.state.title} placeholder="Title" />
                    </div>
                    <div className="EdittextBox">
                        <label htmlFor="category" className="labelStyle" >Category:</label>
                        <input type="text" onChange={(event) => { this.setState({ category: event.target.value }) }} className="form-control" id="category" value={this.state.category} placeholder="Category" />
                    </div>
                    <div className="EdittextBox">
                        <label htmlFor="description" className="labelStyle" >Description:</label>
                        <input type="text" onChange={(event) => { this.setState({ description: event.target.value }) }} className="form-control" id="description" value={this.state.description} placeholder="Description" />
                    </div>
                    <div className="EdittextBox">
                        <label htmlFor="price" className="labelStyle">Price:</label>
                        <input type="text" onChange={(event) => { this.setState({ price: event.target.value }) }} className="form-control" id="price" value={this.state.price} placeholder="Price" />
                    </div>
                </Dialog>
                <Footer />
            </div>
        );
    }
}
export default MyAuctionList;