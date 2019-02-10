import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';


class Header extends Component {
    constructor(props){
    super(props);
    this.state = {
        token:''
    }

    }
    componentWillMount(){
        let key;
        key = localStorage.getItem('token');
        this.setState({token:key}, ()=>{
            console.log(this.state.token)
        })
    }
    render() {
        return (
            <div  className="container-fuild HeaderColor" >
                <Navbar >
                    <Nav className="mr-auto">
                    {this.state.token === '' || this.state.token === null ?
                        <span>
                            
                            <Navbar.Brand  className="headerTitle" >Login</Navbar.Brand>
                            <Navbar.Brand  className="headerTitle" >About</Navbar.Brand>
                        </span>:
                        <span>
                            <Navbar.Brand  className="headerTitle" >Home</Navbar.Brand>
                            <Navbar.Brand  className="headerTitle" >Dashboard</Navbar.Brand>
                            <Navbar.Brand  className="headerTitle" >Add Auction</Navbar.Brand>
                            <Navbar.Brand  className="headerTitle" >My Auction</Navbar.Brand>
                            <Navbar.Brand  className="headerTitle" >History</Navbar.Brand>
                        </span>
                    }
                    </Nav>
                </Navbar>  </div>

        );
    }
}
export default Header;