import React, { Component } from 'react';
import { addProduct, removeProduct } from '../../Store/Action/action';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


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
          <div className="">
            <div className="">
                <p>dfgd</p>
              <img src="./images/image.jpg" alt="" />
            </div>
            <form className="">
              <h3>Registration Form</h3>
              <div className="form-group">
                <input type="text" placeholder="First Name" className="form-control" />

              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Username" className="form-control" />
                <i className="zmdi zmdi-account"></i>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Email Address" className="form-control" />
                <i className="zmdi zmdi-email"></i>
              </div>
              <div className="form-group">
                <select name="" id="" className="form-control">
                  <option value="" disabled selected>Gender</option>
                  <option value="male">Male</option>
                  <option value="femal">Female</option>
                  <option value="other">Other</option>
                </select>
                <i className="zmdi zmdi-caret-down" style={{ fontSize: "17px" }}></i>
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" className="form-control" />
                <i className="zmdi zmdi-lock"></i>
              </div>
              <div className="form-group">
                <input type="password" placeholder="Confirm Password" className="form-control" />
                <i className="zmdi zmdi-lock"></i>
              </div>
              <button>Register
						<i className="zmdi zmdi-arrow-right"></i>
              </button>
            </form>
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
