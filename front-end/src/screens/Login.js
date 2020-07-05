import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import UserForm from '../components/UserForm';
import { Link } from 'react-router-dom'

import { authenticateUser } from '../utils/api';

const Login = (props) => {

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e, field) => {
        if (field === 'email') {
            setLoginDetails({
                ...loginDetails,
                email: e.target.value
            })
        }

        if (field === 'password') {
            setLoginDetails({
                ...loginDetails,
                password: e.target.value
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await authenticateUser(loginDetails);
        if (response.status === 200) {
            props.updateAuthedUser(response.data);
        }
        else {
            alert('Invalid Credentials');
        }
    }

    return (
        <Card>
            <Card.Header as="h5" style={{ backgroundColor: "#343A40", color: "#FFF" }}>Login</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => handleChange(e, 'email')}
                            name="email"
                            value={loginDetails.email}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            onChange={(e) => handleChange(e, 'password')}
                            name="password"
                            minLength="8"
                            value={loginDetails.password}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mb-3">
                        Submit
                    </Button>
                </Form>
                <Link to={`/register`} style={{ color: "black", textDecoration: "underline" }}>
                    Not an existing user, Register here!
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Login;
