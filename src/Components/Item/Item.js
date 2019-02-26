import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/car.jpg';
import Connect from '../../Api';
import './item.css';
import * as firebase from 'firebase';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            contractData:null,
            priceInput: 0,
            activeAccount:'0x7B24658Ff61FDf9c96a458D20f5D105E7cC9383a'
        }
    };

    componentDidMount() {
        console.log(JSON.stringify(this.props.location.state.data))
        this.setState({
            contractData:this.props.location.state.data
        });
        firebase.database().ref("Auctions").child(this.props.location.state.data.firebaseHash).on('value',dataSnapshot => {
            console.log("Bahar wala ==> " + JSON.stringify(dataSnapshot.val()))

            this.setState({
                data:dataSnapshot.val()
            })
        })

    }

    bidAuction(){
        this.props.web3Prop.eth.getCoinbase((err, account) => {
            console.log("Item Page ==> " + account)
            this.props.contractProp.deployed().then((instance) => {
                console.log("sending id ==> " + this.state.contractData.id);
                console.log("typeof id ==> " + typeof (Number(this.state.contractData.id)));
                instance.bid(1, {from: this.state.activeAccount, value:Number(this.state.priceInput) *1000000000000000000, gas: 3000000}).then(() => {
                    console.log("Bid ==> ")
                    this.updateDataOnFirebase(this.props.location.state.data.firebaseHash,this.state.priceInput)
                })
            })
        })
    }

    endAuction(){
        this.props.web3Prop.eth.getCoinbase((err, account) => {
            this.props.contractProp.deployed().then((instance) => {
                instance.auctionEnd(1,{
                    from:this.state.activeAccount,
                    value:0,
                    gas: 3000000
                })
            })
        })
    }

    sendEmail(){
        let obj = {};
        obj.title = "Auction Win Title"
        obj.message = "You won the auction or ahmed has won the auction"
        obj.subject = "Auction Win Title"
        obj.to = "ahmedcs1995@gmail.com"
        Connect(obj).then(t => {
            console.log("email send ==> " + t)
        }).catch(p1 => {
            console.log("email send ==> " + p1)
        })
    }

    updateDataOnFirebase(firebaseHash,price){
        firebase.database().ref('/Auctions').child(firebaseHash).update({
            price:price
        })
    }


    render() {
        const  {data,contractData} = this.state;
        return (
            <div style={{overflowX: 'hidden'}}>
                <Header {...this.props}/>
                {
                    data == null ? <div>   <p>Loading</p> </div>:   <div className="container">
                        <div className="row imgtoper">
                            <div className="col-md-3 col-sm-6 col-xs-6 ">
                                <div className="AddBItBox">
                                    <br/><br/><br/>
                                    <div className="form-group  ">

                                        <input style={{width: 150, marginLeft: '50px'}} type="text" className="form-control " id="usr"  onChange={(event) => {
                                            this.setState({priceInput: event.target.value})
                                        }}/>
                                    </div>
                                    {
                                        this.state.contractData.beneficiary === this.state.activeAccount ?
                                             <button type="button" className="btn btn-success"
                                              onClick={()=>{
                                                 if(this.state.contractData.beneficiary !== this.state.highestBidder){
                                                     this.endAuction()
                                                 }

                                             }}
                                             >END Auction</button>:<button type="button" className="btn btn-success" onClick={()=>{this.sendEmail()}}>ADD BID</button>
                                    }



                                </div>

                            </div>
                            <div className="col-md-2 col-sm-6 col-xs-6 ">
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 ">

                                <img src={`${car}`} alt="" className="itemIm"/>
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
                                    <p className="ItemValueStyle">{contractData.beneficiary ===  contractData.highestBidder ? "Bid Yet Not Started Start your bid at min " + contractData.highestBid:contractData.highestBid} Ether</p>
                                </div>
                                <div>
                                    <p className="itemHeader">Start Date:</p>
                                    <p className="ItemValueStyle">17/02/2019 01:00 AM</p>
                                </div>
                                <div>
                                    <p className="itemHeader">End Date:</p>
                                    <p className="ItemValueStyle">20/02/2019 07:00 PM</p>
                                </div>
                                <div>
                                    <p className="itemHeader">Description:</p>
                                    <p>{data.description}</p>
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