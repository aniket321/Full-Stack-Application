import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../utils/api';

const AdminUserForm = () => {

    /**
    * @description state to store input fields data
    */
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        canRead: false,
        canUpdate: false,
        canDelete: false,
        canCreate: false,
    })

    /**
    * @description state to manage redirect to home page
    */
    const [toHome, setToHome] = useState(false);

    /**
    * @description function to handle changes on the input fields
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
                break

            case 'email':
                setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                })
                break

            case 'mobile':
                setUserDetails({
                    ...userDetails,
                    mobile: e.target.value,
                })
                break

            case 'password':
                setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                })
                break

            case 'canRead':
                setUserDetails({
                    ...userDetails,
                    canRead: !userDetails.canRead,
                })
                break

            case 'canUpdate':
                setUserDetails({
                    ...userDetails,
                    canUpdate: !userDetails.canUpdate,
                })
                break

            case 'canDelete':
                setUserDetails({
                    ...userDetails,
                    canDelete: !userDetails.canDelete,
                })
                break

            case 'canCreate':
                setUserDetails({
                    ...userDetails,
                    canCreate: !userDetails.canCreate,
                })
                break

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
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            email: userDetails.email,
            mobile: userDetails.mobile,
            password: userDetails.password,
            permissions: {
                canRead: userDetails.canRead,
                canUpdate: userDetails.canUpdate,
                canDelete: userDetails.canDelete,
                canCreate: userDetails.canCreate,
            }
        }
        const response = await registerUser(newUser);
        if (response.status === 201) {
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
        <Card.Body>
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

                <Form.Group>
                    <Form.Label>Permissions:</Form.Label>
                    <br />
                    <Form.Check inline
                        label="List Employees"
                        onChange={(e) => handleChange(e, 'canRead')}
                    />
                    <Form.Check inline
                        label="Update Employee"
                        onChange={(e) => handleChange(e, 'canUpdate')}
                    />
                    <Form.Check inline
                        label="Delete Employee"
                        onChange={(e) => handleChange(e, 'canDelete')}
                    />
                    <Form.Check inline
                        label="Add Employee"
                        onChange={(e) => handleChange(e, 'canCreate')}
                    />
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </Card.Body>
    );
}

export default AdminUserForm;
