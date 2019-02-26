import React, {Component} from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Signup from './Components/Signup/Screen';
import Login from './Components/Login/Screen';
import {Provider} from 'react-redux';
import store from './Store/store';
import './App.css';
import MainPage from './Components/Main/Main';
import MyAuction from './Components/AddAuction/Add';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Dashboard from './Components/Dashboard/Dashboard';
import MyAuctionList from './Components/MyAuctionList/MyAuctionList';
import OldHistory from './Components/OldHistory/OldHistory';
import Item from './Components/Item/Item';
import Web3 from 'web3';
import AuctionContract from '../build/contracts/AuctionContract.json'
import TruffleContract from 'truffle-contract'


class App extends Component {


    constructor(props) {
        super(props)
        this.state = {}

          this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')

          this.web3 = new Web3(this.web3Provider)

          this.auctionContract = TruffleContract(AuctionContract)
          this.auctionContract.setProvider(this.web3Provider)

    }

    componentDidMount() {
        /* this.web3.eth.getCoinbase((err, account)=>{
             console.log("account ==> " + account)

             this.auctionContract.deployed().then((instance) => {
                 console.log("address ==> " + instance.address)
                 instance.auctionsCount().then((auctionsCount) => {
                     console.log("auctionsCount ==> " + auctionsCount)

                     for (var i = 1; i <= auctionsCount; i++) {
                         instance.auctions(i).then((auction) => {
                             console.log("checking ==> " + auction)
                             const auctionId = auction[0].toNumber()
                             const auctionName = auction[1]
                             const beneficiary = auction[2]
                             const highestBidder = auction[3]
                             const highestBid = auction[4]
                             const ended = auction[5]
                             const isDelivered = auction[6]
                         })
                     }
                 })
             })
         })*/
    }

    render() {
        return (
            <Provider store={store}>

                <BrowserRouter>
                    <Switch>
                        <Route exact component={MainPage} path="/"/>
                        <Route exact component={Login} path="/Login"/>
                        <Route exact component={Signup} path="/Signup"/>
                        <Route exact component={ChangePassword} path="/ChangePassword"/>
                        <Route exact component={MyAuction} path="/MyAuction"/>
                        <Route exact render={(props)=> <Dashboard web3Prop={this.web3} contractProp={this.auctionContract} {...props} />} path="/Dashboard" />
                        <Route exact component={MyAuctionList} path="/MyAuctionList"/>
                        <Route exact component={OldHistory} path="/OldHistory"/>
                        <Route exact render={(props)=> <Item web3Prop={this.web3} contractProp={this.auctionContract} {...props} />} path="/Item" />

                    </Switch>
                </BrowserRouter>
                {/* <div>
          <AddProduct />
          <List />
        </div> */}

            </Provider>
        );
    }
}

export default App;
