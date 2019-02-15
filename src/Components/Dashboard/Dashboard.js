import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/car.jpg'
import bike from '../../images/bike.jpg'


class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div style={{ overflowX: 'hidden' }}>
                <Header />
                <div className="container">
                    <div className="row justify-content-center hollDiv" >
                        <div className="col-md-6  imgCol" >
                            <img src={`${car}`} alt="" className="images" />
                        </div>
                        <div className="col-md-5" >
                            <div className="form-group">
                                <label htmlFor="title" className="labelStyle" >Title:</label>
                                <input type="text" className="form-control" onChange={() => { }} readOnly id="title" value="Car" />
                                <label htmlFor="category"  className="labelStyle">Category:</label>
                                <input type="text" className="form-control" onChange={() => { }} readOnly id="category" value="Civic" />
                                <label htmlFor="price"  className="labelStyle">Start Bid Price:</label>
                                <input type="text" className="form-control" onChange={() => { }} readOnly id="price" value="20000$" />
                                <label htmlFor="startDate"  className="labelStyle">Start Date:</label>
                                <input type="text" className="form-control" onChange={() => { }} readOnly id="startDate" value="17/02/2019 01:00 AM" />
                                <label htmlFor="endDate"  className="labelStyle">End Date:</label>
                                <input type="text" className="form-control" onChange={() => { }} readOnly id="endDate" value="20/02/2019 06:00 PM" />
                            </div>
                        </div>
                        <div className="col-md-10" >
                        <p className="desPare" >Description</p>
                        <p className="desDetail" >A car (or automobile) is a wheeled motor vehicle used for transportation. Examples include rear reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the 2010s are propelled by an internal combustion engine, fueled by the combustion of fossil fuels.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center hollDiv" >
                        <div className="col-md-6  imgCol" >
                            <img src={`${bike}`} alt="" className="images" />
                        </div>
                        <div className="col-md-5" >
                            <div className="form-group">
                                <label htmlFor="title" className="labelStyle" >Title:</label>
                                <input type="text" className="form-control" onChange={() => { }} readOnly id="title" value="Bike" />
                                <label htmlFor="category"  className="labelStyle">Category:</label>
                                <input type="text" className="form-control" onChange={() => { }} readOnly id="category" value="Honda" />
                                <label htmlFor="price"  className="labelStyle">Start Bid Price:</label>
                                <input type="text" className="form-control" onChange={() => { }} readOnly id="price" value="10000$" />
                                <label htmlFor="startDate"  className="labelStyle">Start Date:</label>
                                <input type="text" className="form-control" onChange={() => { }} readOnly id="startDate" value="18/02/2019 05:30 AM" />
                                <label htmlFor="endDate"  className="labelStyle">End Date:</label>
                                <input type="text" className="form-control" onChange={() => { }} readOnly id="endDate" value="20/02/2019 05:50 AM" />
                            </div>
                        </div>
                        <div className="col-md-10" >
                        <p className="desPare" >Description</p>
                        <p className="desDetail" >Technical Description of a Bicycle. The Bicycle, a mode of transport, form of exercise, and recreational hobby for many, is the vehicle that you don't need a liscense to ride. The bicycle is a two wheeled, pedal driven machine, held together by a framework of metal tubes, with a seat and handlebars for the rider.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Dashboard;