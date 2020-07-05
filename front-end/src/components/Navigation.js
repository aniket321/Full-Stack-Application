import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'

const Navigation = (props) => {

    const logout = () => {
        props.handleLogout();
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Employee Management App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/add">Add Employee</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="success" onClick={logout} as={Link} to="/">Logout</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation;