import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import car from '../../images/car.jpg';
import './item.css';


class Item extends Component {
    constructor(props) {
        super();
        this.state = {}
    }

    componentDidMount() {
        console.log(JSON.stringify(this.props.location.state.data))
    }

    render() {

        return (
            <div style={{overflowX: 'hidden'}}>
                <Header/>
                <div className="container">
                    <div className="row imgtoper">
                        <div className="col-md-3 col-sm-6 col-xs-6 ">
                            <div className="AddBItBox">
                                <br/><br/><br/>
                                <div className="form-group  ">

                                    <input style={{width: 150, marginLeft: '50px'}} type="text"
                                           className="form-control " id="usr"/>
                                </div>
                                <button type="button" className="btn btn-success  ">ADD BID</button>
                            </div>

                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-6 ">
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12 ">

                            <img src={`${car}`} alt="" className="itemIm"/>
                            <div className="divItemTop">
                                <p className="itemHeader">Name:</p>
                                <p className="ItemValueStyle">Car</p>
                            </div>
                            <div>
                                <p className="itemHeader">Category:</p>
                                <p className="ItemValueStyle">Honda</p>
                            </div>
                            <div>
                                <p className="itemHeader">Price:</p>
                                <p className="ItemValueStyle">20000$</p>
                            </div>
                            <div>
                                <p className="itemHeader">Start Date:</p>
                                <p className="ItemValueStyle">17/02/2019 01:00 AM</p>
                            </div>
                            <div>
                                <p className="itemHeader">End Date:</p>
                                <p className="ItemValueStyle">20/02/2019 07:00 PM</p>
                            </div>
                            <div>
                                <p className="itemHeader">Description:</p>
                                <p>A car (or automobile) is a wheeled motor vehicle used for transportation. Most
                                    definitions of car say they run primarily on roads, seat one to eight people, have
                                    four tires, and mainly transport people rather than goods. Cars became widely
                                    available in the early 20th century</p>
                            </div>

                        </div>


                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default Item;