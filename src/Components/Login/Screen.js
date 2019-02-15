import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import img from '../../images/bitcoin.jpg';
import {signupPage,changePassword}  from './Functionality';
import './Style.css';




class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:null
        }
    }
    componentDidMount(){
        console.log('user props List', this.state)
    }
    componentWillReceiveProps(next){
        console.log('componentWillReceiveProps List***', next.product)
      }
    render() {
        return (
            <React.Fragment>
                <div style={{ overflowX: 'hidden' }}>
        <Header />
        <div className="container"   >
          <div className="row justify-content-center">
            <div className="col-md-6 col-xs-8 col-sm-8 ">

              <img src={img} alt="" className="imges"  />
            </div>
            <div className="col-md-6 col-xs-10 col-sm-11" >
              <form >
                <h1 className="head" >Login Your Account</h1>
                
                <div className="form-group box">
                  <input type="text" placeholder="Email Address" className="form-control" />
                </div>

                <div className="form-group box">
                  <input type="password" placeholder="Password" className="form-control" />

                </div>
                <div className="form-group ">
                  <p className="changePassword" onClick={()=>changePassword(this.props)} >Change Password</p>

                </div>
                <div className="form-group center-block ">
                  <button type="button" className="btn btn-primary center-block btn-block btn-lg LogBtn">Login</button>
                </div>
                
                <div className="form-group center-block ">
                  <button type="button" onClick={()=>signupPage(this.props)} className="btn btn-info center-block btn-block btn-lg SignBtn">Signup</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />



      </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("from state List", state);
    return {
      product: state.reducer.product
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
    
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login);