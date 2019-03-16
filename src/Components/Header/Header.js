import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './Header.css';
import * as firebase from 'firebase';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            userName: '',
        }

    }

    componentWillMount() {
        let key,userName;
        key = localStorage.getItem('token');
        userName = localStorage.getItem('userName');



        this.setState({token: key,userName:userName}, () => {
            console.log(this.state.token)
        })
    }

    myAuction() {
        console.log(this.props.history)
        // this.props.history.push('MyAuction')
    }

    logOut() {
        firebase.auth().signOut();
        localStorage.clear();
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container-fuild HeaderColor">
                <Navbar collapseOnSelect expand="lg" variant="outline-info">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {this.state.token === '' || this.state.token === null ?
                            <span>
                                <Nav className="mr-auto">
                                <Nav.Link href="/" className="headerTitle">Home</Nav.Link>
                                <Nav.Link href="Login" className="headerTitle">Login</Nav.Link>
                                <Nav.Link className="headerTitle">About</Nav.Link>
                                </Nav>
                            </span> :
                            <span>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/" className="headerTitle">Home</Nav.Link>
                                    <Nav.Link href="/Dashboard" className="headerTitle">Dashboard</Nav.Link>
                                    <Nav.Link href="/ADDAUCTION" className="headerTitle">Add Auction</Nav.Link>

                                </Nav>
                                <Nav>
                                    <Nav.Link href="/MyAuctionList" className="headerTitle">My Auction</Nav.Link>
                                    {/*  <Nav.Link href="/OldHistory" eventKey={2} className="headerTitle"> History </Nav.Link>*/}
                                    <Nav.Link eventKey={2} className="headerTitle" onClick={() => {
                                        this.logOut()
                                    }}> Logout </Nav.Link>
                                </Nav>

                                {/*    <Nav align="end">
                                    <Nav.Link className="headerTitleWelcome"> WelCome </Nav.Link>
                                </Nav>*/}

                                {
                                    this.state.userName != '' && this.state.userName != null &&
                                    <div align="end" className="headerTitleWelcome">
                                        Welcome {this.state.userName}
                                    </div>
                                }

                            </span>
                        }
                    </Navbar.Collapse>
                </Navbar>


            </div>

        );
    }
}

export default Header;