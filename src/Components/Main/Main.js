import React, { Component } from 'react';
import DemoCarousel from '../Slider/Slider';

 
class MainPage extends Component {
    render() {
        return (
            <div className="container-fuild"  >
            <div className="row" >
            <div className="col-md-12 col-xs-12 col-sm-12 col-xl-12 col-lg-12" >
            <DemoCarousel />
           
            
            </div>
            </div>
            </div>
        );
    }
}
export default MainPage;