import React, { Component } from 'react';
import './MyAuctionList.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class MyAuctionList extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div style={{ overflowX: 'hidden' }}>
                <Header {...this.props} />
                <div className="container">
                    <div className="row" >
                        <div className="col-md-6" >
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
export default MyAuctionList;