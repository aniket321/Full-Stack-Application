import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { registerUser } from '../utils/api';

const UserForm = () => {

    /**
    * @description state to store data of input fields
    */
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
    })

    /**
    * @description state to manage redirect to home page
    */
    const [toHome, setToHome] = useState(false);

    /**
    * @description function to handle change on input fields
    */
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

    /**
    * @description function to handle submit
    */
    const handleSubmit = async (e) => {
        e.preventDefault();
        let newUser = {
            ...userDetails,
            permissions: {
                canRead: true,
                canUpdate: false,
                canDelete: false,
                canCreate: false,
            }
        }
        const response = await registerUser(newUser);
        if (response.status === 201) {
            if (JSON.parse(localStorage.getItem('authedUser')).id === null)
                alert('Registerd! Please Login to continue')
            setToHome(true);
        }
        else {
            if (response.data.name === 'MongoError') {
                alert('User with same email already exist! Use some other email')
            }
            else {
                alert('Some error occured please try again');
            }

        }

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

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    minLength="8"
                    onChange={(e) => handleChange(e, 'password')}
                />
            </Form.Group>

            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default UserForm;
