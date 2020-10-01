import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/formations.jpg';

class HeaderComponent extends Component {  
        
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Patients"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link className="nav-link" exact to="/">Home</Link>
                        <Link className="nav-link" to="/formations">Formations</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
}

export default HeaderComponent;