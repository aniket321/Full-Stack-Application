import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, FormControl, Link } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>Employee Management App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Add Employee</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="outline-primary">Logout</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation;