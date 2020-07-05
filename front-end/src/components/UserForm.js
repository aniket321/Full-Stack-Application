import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const UserForm = () => {

    const [userDetials, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
    })

    const [toHome, setToHome] = useState(false);

    const handleFirstNameChange = (e) => {
        setUserDetails({
            ...userDetials,
            firstName: e.target.value,
        })
    }

    const handleLastNameChange = (e) => {
        setUserDetails({
            ...userDetials,
            lastName: e.target.value,
        })
    }

    const handleEmailChange = (e) => {
        setUserDetails({
            ...userDetials,
            email: e.target.value,
        })
    }

    const handleNumberChange = (e) => {
        setUserDetails({
            ...userDetials,
            phoneNumber: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetials);
        setUserDetails({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        })
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
                    onChange={handleFirstNameChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    onChange={handleLastNameChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={handleEmailChange}
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
                    onChange={handleNumberChange}
                />
            </Form.Group>

            {/* <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    
                />
            </Form.Group> */}

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default UserForm;
