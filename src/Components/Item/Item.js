import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/car.jpg'




class Item extends Component {
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
                    <div className="row " >
                        <div className="col-md-5 col-sm-12 col-xs-12 " >
                            <div  >
                                <p >Car</p>
                                <p >200000$</p>
                            </div>
                            <div >
                                <img src={`${car}`} alt="Avatar"    />
                                   
</div>

                                <div  >
                                    <p >Start Date:</p>
                                    <p >17/02/2019 01:00 AM</p>

                                </div>
                            </div>
                           
                           
                        </div>

                    </div>
                    <Footer />
                </div>
                );
            }
        }
export default Item;