import React, { Component } from 'react';
import { addProduct, removeProduct } from '../../Store/Action/action';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import img from './images/image.jpg';
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
      <div style={{ overflowX: 'hidden' }} >
        <Header />
        <div className="container"  >
          <div className="row justify-content-center">
            <div className="col-md-6 col-xs-8 col-sm-8 ">
                
              <img src={img}alt="" className="img" />
            </div>
             <div className="col-md-6 col-xs-8 col-sm-10" >
            <form >
              <h3>Registration Form</h3>
              <div className="form-group">
                <input type="text" placeholder="First Name" className="form-control" />

              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Username" className="form-control" />
                
              </div>
              <div className="form-group">
                <input type="text" placeholder="Email Address" className="form-control" />
              </div>
              
              <div className="form-group">
                <input type="password" placeholder="Password" className="form-control" />
                
              </div>
              <div className="form-group">
                <input type="password" placeholder="Confirm Password" className="form-control" />
                
              </div>
              <button type="button" className="btn btn-primary justify-content-center">Registration</button>
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