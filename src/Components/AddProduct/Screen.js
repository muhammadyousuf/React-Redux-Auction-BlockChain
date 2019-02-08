import React, { Component } from 'react';
import {addProduct,removeProduct} from '../../Store/Action/action';
import { connect } from 'react-redux';


class AddProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'yousuf'
    }
  }
  componentDidMount(){
    console.log("this Props *****", this.props)
  this.props.addProduct({product:'laptop', price:50000})
  setTimeout(()=>this.props.removeProduct(), 5000)
  }
  componentWillReceiveProps(next){
    console.log('componentWillReceiveProps***', next.product)
  }
  render() {
   
    return (
      <div >
        <h1>Hello World</h1>
        
   
    
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

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);
