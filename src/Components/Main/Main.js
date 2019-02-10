import React, { Component } from 'react';
import DemoCarousel from '../Slider/Slider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class MainPage extends Component {
    render() {
        return (
            <div className="container-fuild"   >
                <Header />
                <div className="row" >
                    <div className="col-md-12 col-xs-12 col-sm-12 col-xl-12 col-lg-12" >
                        <DemoCarousel />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default MainPage;