import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../images/formations.jpg';

class HeaderComponent extends Component {  
    
    constructor(props) {
        super(props);

        this.state = {
            navActive : 'home'
        };

        this.setActiveNav = this.setActiveNav.bind(this);
    };

    setActiveNav(activeN) {
        this.setState({navActive : activeN});
    };
    
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
                    <Nav activeKey={this.state.navActive}
                         onSelect={(selectedKey) => this.setActiveNav(selectedKey)}>
                        <Nav.Link eventKey="home" href="/">Home</Nav.Link>
                        <Nav.Link eventKey="formations" href="/formations">Formations</Nav.Link>
                        <Nav.Link eventKey="about" href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
}

export default HeaderComponent;