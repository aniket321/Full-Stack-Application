import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Navigation = (props) => {

    /**
    * @description function to handle logout button
    */
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