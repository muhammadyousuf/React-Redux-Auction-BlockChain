import React, {Component} from 'react';
import './add.css';
import {FaCamera} from 'react-icons/fa'

import * as firebase from 'firebase';


import Web3 from 'web3';
import AuctionContract from '../../../build/contracts/AuctionContract.json'
import TruffleContract from 'truffle-contract'


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: '',
            price: '',
            start: null,
        }


        this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')

        this.web3 = new Web3(this.web3Provider)

        this.auctionContract = TruffleContract(AuctionContract)
        this.auctionContract.setProvider(this.web3Provider)

    }

    componentDidMount() {


    }

    addAuction() {
        firebase.database().ref("Auctions").push({
            name: this.state.title,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price,
            // img : urlm
        }).then((snap) => {
            console.log("Snap ==>"  + snap.key)
            this.pushDataToBlockChain(snap.key)
        })



    }

    pushDataToBlockChain(hash) {
        this.web3.eth.getCoinbase((err, account) => {
            console.log("account ==> " + account)

            this.auctionContract.deployed().then((instance) => {
                instance.createAuction(this.state.title, hash,this.state.price, {from: account, value: 0, gas: 3000000}).then(() => {
                    console.log("createAuction ==> ")
                })
            })
        })
    }

    uploadImg(e) {
        //Progress Bar
        var userUid = localStorage.getItem('token');
        this.setState({NICimage: true});
        // Get File
        let file = e.target.files[0];
        // Create A Storage Ref
        let storage = firebase.storage().ref().child('auctionImg/' + userUid + '/' + file.name);
        // Upload File
        let task = storage.put(file)
        // Update Progress Barrah
        task.on('state_changed',
            // Handle Progress
            function progressss(snapshot) {
                //let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            // Handle Error
            function error(err) {
            },
            // After Complete
            function complete() {
                storage.getDownloadURL().then(function (urlm) {
                    /* firebase.database().ref("Auctions").child(userUid).push({
                         name : this.state.title,
                         description : this.state.description,
                         category : this.state.category,
                         price : this.state.price,
                         img : urlm})*/


                }).catch(function (error) {
                    // Handle any errors
                    console.log(error)
                });
            },
        )
    }


    render() {

        return (
            <div className="container">

                <div className="row justify-content-center">


                    <div className="col-md-4">
                        <div className="imgDiv">
                            <FaCamera size={150} className="CameraIcon " htmlFor="images"/>
                            <input type="file" style={{
                                cursor: 'pointer', position: 'absolute',
                                top: 0, bottom: 0, right: 0, left: 0, width: '100%', opacity: 0,
                            }}
                                   id="images" accept="image/*"
                            />

                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="textBox">
                                <label htmlFor="title" className="labelStyle">Title:</label>
                                <input type="text" onChange={(event) => {
                                    this.setState({title: event.target.value})
                                }} className="form-control" id="title" value={this.state.title} placeholder="Title"/>
                            </div>
                            <div className="textBox">
                                <label htmlFor="category" className="labelStyle">Category:</label>
                                <input type="text" onChange={(event) => {
                                    this.setState({category: event.target.value})
                                }} className="form-control" id="category" value={this.state.category}
                                       placeholder="Category"/>
                            </div>
                            <div className="textBox">
                                <label htmlFor="description" className="labelStyle">Description:</label>
                                <input type="text" onChange={(event) => {
                                    this.setState({description: event.target.value})
                                }} className="form-control" id="description" value={this.state.description}
                                       placeholder="Description"/>
                            </div>
                            <div className="textBox">
                                <label htmlFor="price" className="labelStyle">Price In Ether:</label>
                                <input type="text" onChange={(event) => {
                                    this.setState({price: event.target.value})
                                }} className="form-control" id="price" value={this.state.price} placeholder="Price"/>
                            </div>
                            <div className="textBox">
                                <label htmlFor="StartDate" className="labelStyle">Start Date:</label>
                                <input type="datetime-local" onChange={(event) => {
                                    this.setState({start: event.target.value})
                                }} className="form-control" id="start" value={this.state.start}
                                       placeholder="Start Date"/>

                            </div>

                            <div className="form-group center-block ">
                                <button type="button" className="btn btn-primary center-block btn-block btn-lg regBtn"
                                        onClick={() => {
                                            this.addAuction()
                                        }}>
                                    Add Auction
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Product;