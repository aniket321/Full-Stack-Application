import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import UserForm from '../components/UserForm';
import { Link } from 'react-router-dom'

const Login = () => {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginDetails);
    }

    return (
        <Card>
            <Card.Header as="h5">Login</Card.Header>
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
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Link to={`/register`}>
                    <Card.Link>Not an existing user, Register here!</Card.Link>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Login;
