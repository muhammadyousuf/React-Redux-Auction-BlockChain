import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        }

    }
    componentWillMount() {
        let key;
        key = localStorage.getItem('token');
        this.setState({ token: key }, () => {
            console.log(this.state.token)
        })
    }

    render() {
        return (
            <div className="container-fuild HeaderColor" >
                <Navbar collapseOnSelect expand="lg" variant="dark">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {this.state.token === '' || this.state.token === null ?
                            <span>
                                <Nav className="mr-auto"  >
                                <Nav.Link className="headerTitle" >Login</Nav.Link>
                                <Nav.Link className="headerTitle" >About</Nav.Link>
                                </Nav>
                            </span> :
                            <span>
                                <Nav className="mr-auto">
                                    <Nav.Link className="headerTitle" >Home</Nav.Link>
                                    <Nav.Link className="headerTitle" >Dashboard</Nav.Link>
                                    <Nav.Link className="headerTitle" >Add Auction</Nav.Link>

                                </Nav>
                                <Nav>
                                    <Nav.Link className="headerTitle">My Auction</Nav.Link>
                                    <Nav.Link eventKey={2} className="headerTitle"> History </Nav.Link>
                                </Nav>
                            </span>
                        }
                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }
}
export default Header;