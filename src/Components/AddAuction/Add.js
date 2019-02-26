import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Product from './ProductFoam';
import './add.css';



class MyAuction extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container-fuild" style={{ overflowX: 'hidden' }}>
                <Header {...this.props}/>
                <Product />
                <Footer />
            </div>
        );
    }
}
export default MyAuction;