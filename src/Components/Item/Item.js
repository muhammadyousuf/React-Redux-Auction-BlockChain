import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/car.jpg';
import Connect from '../../Api';
import './item.css';
import * as firebase from 'firebase';
import {ACCOUNT_ADDRESS, GAS, VALUE} from "../../Constants";
import Loader, {HIDE, LOADING} from "../../loader";


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            contractData: null,
            priceInput: 0,
            activeAccount: localStorage.getItem(ACCOUNT_ADDRESS),
            status : LOADING
        }
    };

    componentDidMount() {
        console.log(JSON.stringify(this.props.location.state.data))
        this.setState({
            contractData: this.props.location.state.data
        });
        firebase.database().ref("Auctions").child(this.props.location.state.data.firebaseHash).on('value', dataSnapshot => {
            console.log("Bahar wala ==> " + JSON.stringify(dataSnapshot.val()))

            this.setState({
                data: dataSnapshot.val(),
                status : HIDE
            })
        })

    }

    getBidInEther(){
        return Number(this.state.priceInput) * VALUE;
    }

    bidAuction() {
        if (this.state.contractData.ended) {
            alert("Auction has ended");
            return
        }
        else if(this.state.contractData.highestBid > this.getBidInEther()){
            alert("Bid Must be greater than previous bid");
            return
        }

        this.getUserEmail(this.state.contractData.beneficiary, "Auction name " + this.state.contractData.auctionName + " has now new highest bid of ether " + this.state.priceInput + " from account " + this.state.activeAccount);



        this.props.web3Prop.eth.getCoinbase((err, account) => {
            console.log("Item Page ==> " + account)
            this.props.contractProp.deployed().then((instance) => {
                console.log("sending id ==> " + this.state.contractData.auctionId);
                console.log("typeof id ==> " + typeof (Number(this.state.contractData.auctionId)));
                instance.bid(1, {
                    from: this.state.activeAccount,
                    value: this.getBidInEther(),
                    gas: GAS
                }).then(() => {
                    console.log("Bid ==> ")
                    this.updateDataOnFirebase(this.props.location.state.data.firebaseHash, this.state.priceInput)
                })
            })
        })
    }


    endAuction() {

        if(this.state.contractData.highestBidder ===  this.state.contractData.beneficiary){
            alert("Bid Yet Not Started Yet");
            return
        }


        this.getUserEmail(this.state.contractData.highestBidder, "Congrats, You won the auction \"" + this.state.contractData.auctionName + "\" , Please goto Site to verify receiving")

        this.props.web3Prop.eth.getCoinbase((err, account) => {
            this.props.contractProp.deployed().then((instance) => {
                instance.auctionEnd(this.state.contractData.auctionId, {
                    from: this.state.activeAccount,
                    value: 0,
                    gas: GAS
                })
            })
        });
        let tempContract = this.state.contractData;
        tempContract.ended = true;

        this.setState({
            contractData:tempContract
        },()=>{
            alert("Auction Ended Successfully")
        })

    }

    getUserEmail(account, message) {
        firebase.database().ref("users").on('value', dataSnapshot => {

            // console.log("checking email", dataSnapshot.val().Email)
            dataSnapshot.forEach(dataSnapshot2 => {
                console.log("checkng ==> " + account.toString().toLowerCase() === dataSnapshot2.val().accountAddress.toString().toLowerCase())
                if (account.toString().toLowerCase() === dataSnapshot2.val().accountAddress.toString().toLowerCase()) {

                    this.sendEmail(dataSnapshot2.val().Email, message)
                }
            })

        })
    }


    markDeliverFlag() {

        if(this.state.contractData.isDelivered){
            alert("already received")
            return
        }

        this.getUserEmail(this.state.contractData.beneficiary, "Bidder has confirm the receiving of item of auction " + this.state.contractData.auctionName)

         this.props.contractProp.deployed().then((instance) => {
             instance.verifyDelivery(this.state.contractData.auctionId,{
                 from:this.state.activeAccount,
                 value:0,
                 gas: GAS
             })
             alert("Thanks for updating")


             let tempData = this.state.contractData;

             tempData.isDelivered = true;

             this.setState({
                 contractData:tempData
             })
         })
    }

    /*
    * call when end auction press and send email to winner
    *
    * and call when winner press the got payment button (email to manager)
    * */
    sendEmail(email, message) {
        let obj = {};
        obj.title = "Auction Alert"
        obj.message = message
        obj.subject = "Auction Alert"
        obj.to = email
        Connect(obj).then(t => {
            console.log("email send ==> " + t)
        }).catch(p1 => {
            console.log("email send ==> " + p1)
        })
    }

    updateDataOnFirebase(firebaseHash, price) {
        firebase.database().ref('/Auctions').child(firebaseHash).update({
            price: price
        })
        alert("Bid Successfully done")
    }

    renderLeftViews() {
      /*  if(this.isOwnerLogin()){
            return this.renderEndAuctionView()
        }else if(this.state.contractData.ended && !this.state.contractData.isDelivered && this.state.contractData.beneficiary != this.state.activeAccount){
            return this.itemDeliveredView()
        }
        else if(this.state.contractData.ended && this.state.contractData.isDelivered){
            return this.renderAlreadyEndedAuctionView()
        }
        else{
            return this.renderBidView()
        }*/

      return this.yousufTest()
    }

    itemDeliveredView(){
        return (<button type="button" className="btn btn-success"
                        onClick={()=>{
                            if(this.state.contractData.beneficiary !== this.state.highestBidder){
                                this.markDeliverFlag()
                            }

                        }}
        >Item Delivered?</button>)
    }

    isOwnerLogin(){
        return this.state.contractData.beneficiary.toLowerCase() === this.state.activeAccount.toLowerCase()
    }
    renderEndAuctionView(){
        return(
            <button type="button" className="btn btn-success"
                    onClick={()=>{
                        if(this.state.contractData.beneficiary !== this.state.highestBidder){
                            if(this.state.contractData.ended){
                                alert("Auction already ended")
                                return
                            }
                            this.endAuction()
                        }

                    }}
            >END Auction</button>
        )
    }



    renderBidView() {
        return (  <div className="form-group">

            <input style={{width: 150, marginLeft: '50px',marginBottom:'10px'}} type="text" className="form-control " id="usr"
                   onChange={(event) => {
                       this.setState({priceInput: event.target.value})
                   }}/>

            <button type="button" className="btn btn-success" onClick={()=>{this.bidAuction()}}>ADD BID</button>
        </div>)
    }


    yousufTest() {
        return (  <div className="form-group bid-view">


            <h1 className="auction-heading">Auction</h1>

            <hr/>

            <div className="circle-view">

                <p className="bid-text" > Current bid</p>
                <p className="bid-text-value" > $99.00</p>


            </div>


            <input style={{width: 180, marginLeft: '50px',marginBottom:'10px'}} type="number" className="form-control auction-bid-input" id="usr"
                   onChange={(event) => {
                       this.setState({priceInput: event.target.value})
                   }}/>

            <button type="button" className="btn btn-success bid-btn" onClick={()=>{this.bidAuction()}}>ADD BID</button>
        </div>)
    }


    renderAlreadyEndedAuctionView() {
        return (  <div className="form-group">
            <button type="button" className="btn btn-success">Auction Ended</button>
        </div>)
    }

    render() {
        const {data, contractData} = this.state;
        if(contractData != null){
            console.log("render ==> " + this.state.contractData.beneficiary);
            console.log("render ==> " + this.state.activeAccount);
        }
        return (
            <div style={{overflowX: 'hidden'}}>
                <Header {...this.props}/>
                {
                    data == null ?  <Loader status={this.state.status}/>: <div className="container">
                        <div className="row imgtoper">
                            <div className="col-md-3 col-sm-6 col-xs-6 ">
                                <div>


                                    {
                                        this.renderLeftViews()
                                    }
                                </div>

                            </div>
                            <div className="col-md-2 col-sm-6 col-xs-6 ">
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 ">


                                <h1 className="heading_class">{data.name}</h1>

                                <img src={this.state.data.image} alt="" className="itemIm"/>


                                <div className="detail_container">



                                <div className="divItemTop">
                                    <p className="itemHeader">Name:</p>
                                    <p className="ItemValueStyle">{data.name}</p>
                                </div>
                                <div>
                                    <p className="itemHeader">Category:</p>
                                    <p className="ItemValueStyle">{data.category}</p>
                                </div>
                                <div>
                                    <p className="itemHeader">Highest Bid:</p>
                                    <p className="ItemValueStyle">{contractData.beneficiary === contractData.highestBidder ? "Bid Yet Not Started Start your bid at min " + contractData.highestBid : contractData.highestBid}
                                        Ether</p>
                                </div>
                                <div>
                                    <p className="itemHeader">Start Date:</p>
                                    <p className="ItemValueStyle">{data.date}</p>
                                </div>
                                <div>
                                    <p className="itemHeader">Description:</p>
                                    <p>{data.description}</p>
                                </div>
                                </div>

                            </div>


                        </div>

                    </div>
                }

                <Footer/>
            </div>
        );
    }
}

export default Item;