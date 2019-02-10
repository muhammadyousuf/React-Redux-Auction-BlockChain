import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <div className="row" >
            <div className="col-md-6 col-md-offset-4 col-xs-6 col-xs-offset-4 col-sm-6 col-sm-offset-4 col-lg-6 col-lg-offset-4 col-xl-6 col-xl-offset-4" style={{width:550, height:300, marginTop:'5%'}}>
            <Carousel >
            <div >
                    <img src={require('../../images/car.jpg')} alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div >
                    <img src={require('../../images/bike.jpg')} alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div >
                    <img src={require('../../images/mobile.jpg')} alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require('../../images/laptop.jpg')} alt=""  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('../../images/computer.jpg')} alt="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={require('../../images/white.jpg')} alt="" />
                </div>
            </Carousel>
            </div>
            </div>
        );
    }
}
export default DemoCarousel;