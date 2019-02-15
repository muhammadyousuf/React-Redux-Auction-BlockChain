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
                    <div className="row justify-content-center" >
                        <div className="col-md-6  imgCol" >
                        <img src={`${car}`} alt="" className="images" />
                        </div>
                        <div className="col-md-6" >
                        </div>
                        <div className="col-md-10" >
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Dashboard;