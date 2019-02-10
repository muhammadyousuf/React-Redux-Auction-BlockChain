import React, { Component } from 'react';
import DemoCarousel from '../Slider/Slider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Introduction from './Intro';
import Start from './Start';
import './Intro.css'


class MainPage extends Component {
    render() {
        return (
            <div className="container-fuild"   >
               <div className="bgImage" >
                <Header />
                <Start />
                </div>
                <div className="row" >
                    <div className="col-md-12 col-xs-12 col-sm-12 col-xl-12 col-lg-12" >
                        <DemoCarousel />
                    
                </div>
                </div>
                <Introduction />
                <Footer />
            </div>
        );
    }
}
export default MainPage;