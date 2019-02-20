import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/car.jpg'
import bike from '../../images/bike.jpg'
import computer from '../../images/computer.jpg'
import house from '../../images/house.jpg'



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
                    <div className="row hollDiv" >
                        <div className="col-md-4 col-sm-12 col-xs-12 " >
                            <div className="listHead" >
                                <p className="headPara">Car</p>
                                <p className="headDate">200000$</p>
                            </div>
                            <div className="containers">
                                <img src={`${car}`} alt="Avatar" className="image"   />
                                    <div className="middle">
                                        <div className="text">Detail</div>
                                    </div>
</div>

                                <div className="listFoot " >
                                    <p className="footendDate">Start Date:</p>
                                    <p className="footPrice" >17/02/2019 01:00 AM</p>

                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 " >
                            <div className="listHead" >
                                <p className="headPara">Bike</p>
                                <p className="headDate">100000$</p>
                            </div>
                            <div className="containers">
                                <img src={`${bike}`} alt="Avatar" className="image"   />
                                    <div className="middle">
                                        <div className="text">Detail</div>
                                    </div>
</div>

                                <div className="listFoot " >
                                    <p className="footendDate">Start Date:</p>
                                    <p className="footPrice" >25/02/2019 05:00 AM</p>

                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 " >
                            <div className="listHead" >
                                <p className="headPara">House</p>
                                <p className="headDate">500000$</p>
                            </div>
                            <div className="containers">
                                <img src={`${house}`} alt="Avatar" className="image"   />
                                    <div className="middle">
                                        <div className="text">Detail</div>
                                    </div>
</div>

                                <div className="listFoot " >
                                    <p className="footendDate">Start Date:</p>
                                    <p className="footPrice" >02/03/2019 03:00 PM</p>

                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 " >
                            <div className="listHead" >
                                <p className="headPara">Computer</p>
                                <p className="headDate">5000$</p>
                            </div>
                            <div className="containers">
                                <img src={`${computer}`} alt="Avatar" className="image"   />
                                    <div className="middle">
                                        <div className="text">Detail</div>
                                    </div>
</div>

                                <div className="listFoot " >
                                    <p className="footendDate">Start Date:</p>
                                    <p className="footPrice" >08/03/2019 06:00 PM</p>

                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 " >
                            <div className="listHead" >
                                <p className="headPara">Car</p>
                                <p className="headDate">60000$</p>
                            </div>
                            <div className="containers">
                                <img src={`${car}`} alt="Avatar" className="image"   />
                                    <div className="middle">
                                        <div className="text">Detail</div>
                                    </div>
</div>

                                <div className="listFoot " >
                                    <p className="footendDate">Start Date:</p>
                                    <p className="footPrice" >15/03/2019 05:00 AM</p>

                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 col-xs-12 " >
                            <div className="listHead" >
                                <p className="headPara">Hoouse</p>
                                <p className="headDate">700000$</p>
                            </div>
                            <div className="containers">
                                <img src={`${house}`} alt="Avatar" className="image"   />
                                    <div className="middle">
                                        <div className="text">Detail</div>
                                    </div>
</div>

                                <div className="listFoot " >
                                    <p className="footendDate">Start Date:</p>
                                    <p className="footPrice" >22/03/2019 08:00 AM</p>

                                </div>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
                );
            }
        }
export default Dashboard;