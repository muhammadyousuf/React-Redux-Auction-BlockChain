import React, { Component } from 'react';
import './add.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {FaCamera} from 'react-icons/fa'



class Product extends Component {
    constructor(props) {
        super();
        this.state = {
            toggle: true,
            title: '',
            description: '',
            category: '',
            price: '',
            start:null,
            end:null


        }
    }
    componentDidMount() {

    }

    render() {

        return (
            <div className="container">
                {!this.state.toggle ?
                    <div className="row">

                        <div className="col-md-5" >
                        </div>


                    </div> :
                    <div className="row justify-content-center" >


                        <div className="col-md-4" >
                           <div className="imgDiv" >
                           <FaCamera size={150} className="CameraIcon " htmlFor="images" />
                           <input type="file"  style={{
                        cursor: 'pointer', position: 'absolute',
                        top: 0, bottom: 0, right: 0, left: 0, width: '100%', opacity: 0,
                      }}
                         id="images" accept="image/*"
                      />
                    
                            </div>

                            </div>
                            <div className="col-md-6"  >
                                <div className="form-group">
                                    <div className="textBox" >
                                        <label htmlFor="title" className="labelStyle">Title:</label>
                                        <input type="text" onChange={(event) => { this.setState({ title: event.target.value }) }} className="form-control" id="title" value={this.state.title} placeholder="Title" />
                                    </div>
                                    <div className="textBox">
                                        <label htmlFor="category" className="labelStyle" >Category:</label>
                                        <input type="text" onChange={(event) => { this.setState({ category: event.target.value }) }} className="form-control" id="category" value={this.state.category} placeholder="Category" />
                                    </div>
                                    <div className="textBox">
                                        <label htmlFor="description" className="labelStyle" >Description:</label>
                                        <input type="text" onChange={(event) => { this.setState({ description: event.target.value }) }} className="form-control" id="description" value={this.state.description} placeholder="Description" />
                                    </div>
                                    <div className="textBox">
                                        <label htmlFor="price" className="labelStyle">Price:</label>
                                        <input type="text" onChange={(event) => { this.setState({ price: event.target.value }) }} className="form-control" id="price" value={this.state.price} placeholder="Price" />
                                    </div>
                                    <div className="textBox">
                                        <label htmlFor="StartDate" className="labelStyle">Start Date:</label>
                                        <input type="datetime-local" onChange={(event) => { this.setState({ start: event.target.value }) }} className="form-control" id="start" value={this.state.start} placeholder="Start Date" />

                                    </div>
                                    <div className="textBox">
                                        <label htmlFor="EndDate" className="labelStyle">End Date:</label>
                                        <input type="datetime-local" onChange={(event) => { this.setState({ end: event.target.value }) }} className="form-control" id="end" value={this.state.end} placeholder="End Date" />

                                    </div>

                                </div>
                            </div>
                        </div>
                        }
        
            </div>
        );
            }
        }
export default Product;