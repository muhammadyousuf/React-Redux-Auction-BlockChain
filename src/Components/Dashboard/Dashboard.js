import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/car.jpg'



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
                          <p className="headPara">17/02/2019 01:00 AM</p>
                              <p className="headPrice">20000$</p>
                            </div>
                    
                         <div  >
                            <img src={`${car}`} alt="" className="images" />
                        </div>
                        {/* <div >
                            <div className="form-group">
                               
                            </div>
                        </div> */}
                        <div className="listFoot " >
                            <p className="footendDate">20/02/2019 06:00 PM</p>
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