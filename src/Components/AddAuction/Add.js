import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Product from './ProductFoam';
import './add.css';



class MyAuction extends Component {
    render() {
        return (
            <div className="container-fuild" style={{ overflowX: 'hidden' }}>
                <Header />
                <Product />
                <Footer />
            </div>
        );
    }
}
export default MyAuction;