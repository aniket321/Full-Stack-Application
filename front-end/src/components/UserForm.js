import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { registerUser } from '../utils/api';

const UserForm = () => {

    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
    })

    const [toHome, setToHome] = useState(false);

    const handleChange = (e, field) => {
        switch (field) {
            case 'firstName':
                setUserDetails({
                    ...userDetails,
                    firstName: e.target.value,
                })
                break;

            case 'lastName':
                setUserDetails({
                    ...userDetails,
                    lastName: e.target.value,
                })
                break;

            case 'email':
                setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                })
                break;

            case 'mobile':
                setUserDetails({
                    ...userDetails,
                    mobile: e.target.value,
                })
                break;

            case 'password':
                setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                })
                break;

            default:
                setUserDetails(userDetails)
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await registerUser(userDetails);
        if (response.status === 201) {
            if (JSON.parse(localStorage.getItem('authedUser')).id === null)
                alert('Registerd! Please Login to continue')
            else {
                alert('Employee added successfully!!')
            }
        }
        else {
            // onError(response.data)
            alert('Some error occured please try again');
        }
        setToHome(true);
    }

    if (toHome) {
        return <Redirect to="/" />
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    onChange={(e) => handleChange(e, 'firstName')}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => handleChange(e, 'lastName')}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={(e) => handleChange(e, 'email')}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    required
                    pattern="[0-9]*"
                    type="text"
                    maxLength="10"
                    placeholder="Phone Number"
                    onChange={(e) => handleChange(e, 'mobile')}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    minLength="8"
                    onChange={(e) => handleChange(e, 'password')}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default UserForm;
