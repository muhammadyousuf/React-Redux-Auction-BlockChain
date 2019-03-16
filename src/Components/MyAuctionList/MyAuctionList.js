import React, { Component } from 'react';
import './MyAuctionList.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/bike.jpg'
import { MdDelete, MdEdit, MdVisibility } from 'react-icons/md';
import '../Dashboard/Dashboard.css';
import { Dialog, FlatButton } from 'material-ui';
import {HIDE, LOADING} from "../../loader";
import {ACCOUNT_ADDRESS, GAS, VALUE} from "../../Constants";
import Loader from "../../loader";

import * as firebase from 'firebase';
class MyAuctionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            status : LOADING,
            activeAccount: localStorage.getItem(ACCOUNT_ADDRESS),

            //pop up
            title:'',
            description:'',
            price:'',
            category:'',

            //firebase item
            cloudData:null,
            selectedData:null,

            selectedIndex:0,
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


    item(data) {
        console.log('item', this.props.history)
        this.props.history.push({
            pathname: '/Item',
            state: {
                data: data,
                title:data.auctionName,
                category:data,
                description:data

            }
        })
    }

    getDataFromCloud = (data) =>{
        firebase.database().ref("Auctions").child(data.firebaseHash).on('value', dataSnapshot => {

            this.setState({
                cloudData: dataSnapshot.val(),
                status : HIDE,
                open: true,
                title:dataSnapshot.val().name,
                description:dataSnapshot.val().description,
                category:dataSnapshot.val().category,
            })
        })
    };

    handleClose() {
        this.setState({ open: false });
    };
    EditData() {
        console.log('Edit');
        this.setState({ open: false });
    }

    updatedBid = (data) => {

        //update data on blockchain
        this.updateDataOnBlockChain(Number(data.auctionId),data)

         //update data on firebase


    };

    updateDataOnCloud = (uid) => {
        firebase.database().ref('/Auctions').child(uid).update({
            category: this.state.category,
            description: this.state.description,
            name: this.state.title,
        }).then(t => {
            //update
            let tempData = this.state.data
            tempData[this.state.selectedIndex].auctionName = this.state.title;
            this.setState({
                data:tempData,
                open: false
            })
        })

    };

    updateDataOnBlockChain = (auctionId,data) => {
        this.props.web3Prop.eth.getCoinbase((err, account) => {
            console.log("Item Page ==> " + account)
            this.props.contractProp.deployed().then((instance) => {
                instance.editAuction(auctionId,this.state.title, {
                    from: this.state.activeAccount,
                    gas: GAS
                })
            }).then(()=>{
                this.updateDataOnCloud(data.firebaseHash)
            })
        })
    };

    handleOpen = (data,index) => {

        this.setState({
            status : LOADING,
            selectedData : data,
            selectedIndex : index
        })

        this.getDataFromCloud(data)
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
                onClick={() => this.updatedBid(this.state.selectedData)}
                disabled={this.state.button}
            />,
        ];
        return (
            <div style={{ overflowX: 'hidden', backgroundColor: '#fff' }}  >
                <div className="coverImage" >

                    <Loader status={this.state.status}/>

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
                                                {/*<img src={`${car}`} alt="Avatar" className="image" />*/}
                                                <i class="fa fa-gavel" style={{
                                                    fontSize:150,
                                                    marginTop:20
                                                }}></i>
                                            </div>
                                            <p className="headPara">{data.auctionName}</p>
                                            <div className="listFoot " >
                                            {/*    <p className="footendDate">Start Date</p>
                                                <p className="footPrice" >17/02/2019 01:00 AM</p>*/}
                                                <p className="footendDate">Auction Status</p>
                                                <p className="statusCheck" >{data.ended ? "Closed" : "Open"}</p>
                                                <p className="headDate">Highest Bid = {data.beneficiary === data.highestBidder ? "Bid Yet Not Started Start your bid at min " + data.highestBid : data.highestBid} Ether</p>
                                                <div style={{ textAlign: 'center' }} >
                                                    <div className="iconBtn" onClick={()=>this.item(data)} ><MdVisibility size={25} style={{ marginTop: 5 }} /></div>
                                                    {/*<div className="iconBtn" onClick={()=>this.item(data)} ><MdDelete size={25} style={{ marginTop: 5 }} /></div>*/}
                                                    <div className="iconBtn" onClick={()=>this.handleOpen(data,index)} ><MdEdit size={25} style={{ marginTop: 5 }} /></div>
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

                    {
                        this.state.cloudData != null && <div>

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

                        </div>
                    }

                </Dialog>
                <Footer />
            </div>
        );
    }
}
export default MyAuctionList;