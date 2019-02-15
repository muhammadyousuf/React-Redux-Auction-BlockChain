import React, { Component } from 'react';
import { addProduct, removeProduct } from '../../Store/Action/action';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import img from '../../images/bitcoin.jpg';
import './Style.css';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'yousuf'
    }
  }
  componentDidMount() {
    console.log("this Props *****", this.props)
    this.props.addProduct({ product: 'laptop', price: 50000 })
    setTimeout(() => this.props.removeProduct(), 5000)
  }
  componentWillReceiveProps(next) {
    console.log('componentWillReceiveProps***', next.product)
  }
  render() {

    return (
      <div style={{ overflowX: 'hidden' }}>
        <Header />
        <div className="container"   >
          <div className="row justify-content-center">
            <div className="col-md-6 col-xs-8 col-sm-8 ">

              <img src={img} alt="" className="img"  />
            </div>
            <div className="col-md-6 col-xs-10 col-sm-11" >
              <form >
                <h1 className="headings" >Create a new account</h1>
                <div className="form-group boxes ">
                  <input type="text" placeholder="First Name" className="form-control" />

                </div>
                <div className="form-group boxes">
                  <input type="text" placeholder="Last Name" className="form-control" />
                </div>
                <div className="form-group boxes">
                  <input type="text" placeholder="Username" className="form-control" />

                </div>
                <div className="form-group boxes">
                  <input type="text" placeholder="Email Address" className="form-control" />
                </div>

                <div className="form-group boxes">
                  <input type="password" placeholder="Password" className="form-control" />

                </div>
                <div className="form-group boxes">
                  <input type="password" placeholder="Confirm Password" className="form-control" />

                </div>
                <div className="form-group center-block ">
                  <button type="button" className="btn btn-primary center-block btn-block btn-lg regBtn">Registration</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />



      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("from state", state);
  return {
    product: state.reducer.product
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
    removeProduct: () => dispatch(removeProduct())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
