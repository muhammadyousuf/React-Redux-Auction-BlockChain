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
                    <img src="https://firebasestorage.googleapis.com/v0/b/mechanic-6d028.appspot.com/o/Admin%20Picture%2FFB_IMG_1541916306877.jpg?alt=media&token=8a0607d4-5b3f-4adf-9188-346cee3b8e1c" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mechanic-6d028.appspot.com/o/Admin%20Picture%2FFB_IMG_1541917849326.jpg?alt=media&token=1afbe885-be6f-42f3-aba5-a5c05ece3621" alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
            </div>
        );
    }
}
export default DemoCarousel;