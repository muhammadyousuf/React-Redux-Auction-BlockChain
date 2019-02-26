import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import img from '../../images/bitcoin.jpg';
import './ChangePassword.css';




class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:null
        }
    }
   
    render() {
        return (
            <React.Fragment>
                <div style={{ overflowX: 'hidden' }}>
        <Header {...this.props}/>
        <div className="container"   >
          <div className="row justify-content-center">
            <div className="col-md-6 col-xs-8 col-sm-8 ">

              <img src={img} alt="" className="imge"  />
            </div>
            <div className="col-md-6 col-xs-10 col-sm-11" >
              <form >
                <h1 className="heads" >Change Password</h1>
                
                <div className="form-group Inputbox">
                  <input type="text" placeholder="Email Address" className="form-control" />
                </div>

                <div className="form-group Inputbox">
                  <input type="password" placeholder="Old Password" className="form-control" />

                </div>
                <div className="form-group Inputbox">
                  <input type="password" placeholder="New Password" className="form-control" />

                </div>
                <div className="form-group Inputbox">
                  <input type="password" placeholder="Conform Password" className="form-control" />

                </div>
                
                <div className="form-group center-block ">
                  <button type="button" className="btn btn-primary center-block btn-block btn-lg changeBtn">Conform</button>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword);