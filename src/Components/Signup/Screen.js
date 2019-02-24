import React, {Component} from 'react';
import {addProduct, removeProduct} from '../../Store/Action/action';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import img from '../../images/bitcoin.jpg';
import './Style.css';
import * as firebase from 'firebase';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            Email: '',
            password: '',
            ConformPass: '',
            accountAddress: ''
        }


        this.ref = firebase.database().ref("users");
    }

    componentDidMount() {
        console.log("this Props *****", this.props)
        this.props.addProduct({product: 'laptop', price: 50000})
        setTimeout(() => this.props.removeProduct(), 5000)
    }

    componentWillReceiveProps(next) {
        console.log('componentWillReceiveProps***', next.product)
    }


    submitdata() {
        if (this.state.firstname === "" || this.state.lastname === "" || this.state.Email === "" || this.state.password === "" || this.state.ConformPass === "") {
            alert('Please Fill All The Fields');
            return
        }
        if (this.state.password !== this.state.ConformPass) {
            alert('Incorrect Password')
            return
        }
        const email = this.state.Email;
        const pass = this.state.password;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.then((res) => {
            if (res.user.uid != null) {

                console.log("UID ==> " + res.user.uid)
                this.ref.child(res.user.uid).set({
                    firstname: this.state.firstname + " " + this.state.lastname,
                    Email: this.state.Email,
                    password: this.state.password,
                    accountAddress: this.state.accountAddress
                }).then((snapShot)=>{
                    console.log("Snap Shot ==> " + JSON.stringify(snapShot))
                })

                this.setState({
                    firstname: '',
                    lastname: '',
                    Email: '',
                    password: '',
                    ConformPass: '',
                    value: ''
                })
            }
        });
        promise.catch(e => alert(e.message));


    }



    pushDataOnStorage(){

    }
    render() {
        return (
            <div style={{overflowX: 'hidden'}}>
                <Header/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-xs-8 col-sm-8 ">

                            <img src={img} alt="" className="img"/>
                        </div>
                        <div className="col-md-6 col-xs-10 col-sm-11">
                            <form>
                                <h1 className="headings">Create a new account</h1>
                                <div className="form-group boxes ">
                                    <input type="text" placeholder="First Name" className="form-control" onChange={(text)=> {
                                        this.setState({
                                            firstname:text.target.value

                                        })
                                    }} />

                                </div>
                                <div className="form-group boxes">
                                    <input type="text" placeholder="Last Name" className="form-control" onChange={(text)=> {
                                        this.setState({
                                            lastname:text.target.value

                                        })
                                    }}/>
                                </div>
                                <div className="form-group boxes">
                                    <input type="text" placeholder="Account Address" className="form-control" onChange={(text)=> {
                                        this.setState({
                                            accountAddress:text.target.value

                                        })
                                    }} />

                                </div>
                                <div className="form-group boxes">
                                    <input type="text" placeholder="Email Address" className="form-control" onChange={(text)=> {
                                        this.setState({
                                            Email:text.target.value

                                        })
                                    }}/>
                                </div>

                                <div className="form-group boxes">
                                    <input type="password" placeholder="Password" className="form-control" onChange={(text)=> {
                                        this.setState({
                                            password:text.target.value

                                        })
                                    }}/>

                                </div>
                                <div className="form-group boxes">
                                    <input type="password" placeholder="Confirm Password" className="form-control" onChange={(text)=> {
                                        this.setState({
                                            ConformPass:text.target.value

                                        })
                                    }}/>

                                </div>
                                <div className="form-group center-block ">
                                    <button type="button" className="btn btn-primary center-block btn-block btn-lg regBtn" onClick={() => this.submitdata()} >
                                        Registration
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>


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
