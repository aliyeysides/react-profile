import React from 'react';
import ReactDOM from 'react-dom';
import {
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem
 } from 'react-bootstrap';

class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">ALI YEYSIDES ¬ RESEARCH + DEVELOPMENT</a>
                </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="https://github.com/aliyeysides" target="_blank">GITHUB</NavItem>
                    <NavItem eventKey={2} href="https://www.linkedin.com/in/ali-yeysides-b099b266" target="_blank">LINKEDIN</NavItem>
                    <NavItem eventKey={3} href="mailto:ali.yeysides@gmail.com">EMAIL</NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default MyNavbar;