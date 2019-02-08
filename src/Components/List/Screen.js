import React, { Component } from 'react';
import { connect } from 'react-redux';




class List extends Component {
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
               <h1>Hello</h1>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(List);