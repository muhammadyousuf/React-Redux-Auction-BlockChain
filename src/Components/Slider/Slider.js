import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <div className="row"  >
                <div className="col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-lg-6 col-lg-offset-3 col-xl-6 col-xl-offset-3" style={{ marginTop: '5%' }}>
                    <Carousel  >
                        <div>
                            <img src={require('../../images/house.jpg')} alt="" />
                            <p className="legend">House</p>
                        </div>
                        <div >
                            <img src={require('../../images/car.jpg')} alt="" />
                            <p className="legend">Car</p>
                        </div>
                        <div >
                            <img src={require('../../images/bike.jpg')} alt="" />
                            <p className="legend">Bike</p>
                        </div>
                        <div >
                            <img src={require('../../images/mobile.jpg')} alt="" />
                            <p className="legend">Mobile</p>
                        </div>
                        <div>
                            <img src={require('../../images/laptop.jpg')} alt="" />
                            <p className="legend">Laptop</p>
                        </div>
                        <div>
                            <img src={require('../../images/computer.jpg')} alt="" />
                            <p className="legend">Computer</p>
                        </div>

                    </Carousel>
                </div>

            </div>
        );
    }
}
export default DemoCarousel;