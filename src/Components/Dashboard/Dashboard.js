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
                    <div className="col-md-6 col-sm-12 col-xs-12 " >
                        <div className="listHead" >
                          <p className="headPara">Car</p>
                              <p className="headDate">17/02/2019 01:00 AM</p>
                            </div>
                    <div  >
                         <div  >
                            <img src={`${car}`} alt="" className="images" />
                            <button type="button" class="btn btn-primary btnInfo ">Detail</button>
                               
                            </div>
                        </div>
                        <div className="listFoot " >
                            <p  className="footPrice" >200000$</p>
                            <p className="footendDate">20/02/2019 06:00 PM</p>
                        </div> 
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 " >
                        <div className="listHead" >
                          <p className="headPara">House</p>
                              <p className="headDate">20/02/2019 05:00 AM</p>
                            </div>
                    <div  >
                         <div  >
                            <img src={`${house}`} alt="" className="images" />
                            <button type="button" class="btn btn-primary btnInfo ">Detail</button>
                               
                            </div>
                        </div>
                        <div className="listFoot " >
                            <p  className="footPrice" >500000$</p>
                            <p className="footendDate">20/05/2019 06:00 PM</p>
                        </div> 
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 " >
                        <div className="listHead" >
                          <p className="headPara">Bike</p>
                              <p className="headDate">27/02/2019 01:00 AM</p>
                            </div>
                    <div  >
                         <div  >
                            <img src={`${bike}`} alt="" className="images" />
                            <button type="button" class="btn btn-primary btnInfo ">Detail</button>
                               
                            </div>
                        </div>
                        <div className="listFoot " >
                            <p  className="footPrice" >10000$</p>
                            <p className="footendDate">29/02/2019 09:00 PM</p>
                        </div> 
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 " >
                        <div className="listHead" >
                          <p className="headPara">Computer</p>
                              <p className="headDate">25/02/2019 01:00 AM</p>
                            </div>
                    <div  >
                         <div  >
                            <img src={`${computer}`} alt="" className="images" />
                            <button type="button" class="btn btn-primary btnInfo ">Detail</button>
                               
                            </div>
                        </div>
                        <div className="listFoot " >
                            <p  className="footPrice" >5000$</p>
                            <p className="footendDate">2/03/2019 06:00 PM</p>
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