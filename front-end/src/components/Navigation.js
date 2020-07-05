import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Navigation = (props) => {

    const logout = () => {
        props.handleLogout();
    }

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>Employee Management App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/add">Add Employee</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="outline-primary" onClick={logout}>Logout</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation;