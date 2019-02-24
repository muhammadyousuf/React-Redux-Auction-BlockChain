import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import img from '../../images/bitcoin.jpg';
import {signupPage,changePassword,gotoDashboard}  from './Functionality';
import './Style.css';
import * as firebase from 'firebase';



class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            Email: '',
            Password: ''
        }
    }


    loginUser() {

        const email = this.state.Email;
        const pass = this.state.Password;
        const auth = firebase.auth();


        if (email === "" || pass === "") {
            alert('Please Fill All The Fields');
            return
        }

        // Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass)
        promise.then(res => {
            console.log(res);
            if (res.user.uid != null) {
                alert('successfull Login')
              //  window.location.reload()
              //  this.props.history.push('/Chat')
                console.log(res.user.uid);
                localStorage.setItem("token", res.user.uid);
                gotoDashboard(this.props)
            }
        })
        promise.catch(e => {
            alert(e.message)
        });
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser)
            }

        })
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
                  <input type="text" placeholder="Email Address" className="form-control" onChange={(text)=> {
                      this.setState({
                          Email:text.target.value

                      })
                  }} />
                </div>

                <div className="form-group box">
                  <input type="password" placeholder="Password" className="form-control" onChange={(text)=> {
                      this.setState({
                          Password:text.target.value

                      })
                  }}/>

                </div>
                {/*<div className="form-group ">
                  <p className="changePassword" onClick={()=>changePassword(this.props)} >Change Password</p>

                </div>*/}
                <div className="form-group center-block ">
                  <button type="button" className="btn btn-primary center-block btn-block btn-lg LogBtn" onClick={()=>this.loginUser()}>Login</button>
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