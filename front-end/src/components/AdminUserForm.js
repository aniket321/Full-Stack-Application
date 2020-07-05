import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const AdminUserForm = () => {

    const [userDetials, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        canRead: false,
        canUpdate: false,
        canDelete: false,
        canCreate: false,
    })

    const [toHome, setToHome] = useState(false);

    const handleChange = (e, field) => {
        switch (field) {
            case 'firstName':
                setUserDetails({
                    ...userDetials,
                    firstName: e.target.value,
                })
                break;

            case 'lastName':
                setUserDetails({
                    ...userDetials,
                    lastName: e.target.value,
                })
                break

            case 'email':
                setUserDetails({
                    ...userDetials,
                    email: e.target.value,
                })
                break

            case 'phoneNumber':
                setUserDetails({
                    ...userDetials,
                    phoneNumber: e.target.value,
                })
                break

            case 'password':
                setUserDetails({
                    ...userDetials,
                    password: e.target.value,
                })
                break

            case 'canRead':
                setUserDetails({
                    ...userDetials,
                    canRead: !userDetials.canRead,
                })
                break

            case 'canUpdate':
                setUserDetails({
                    ...userDetials,
                    canUpdate: !userDetials.canUpdate,
                })
                break

            case 'canDelete':
                setUserDetails({
                    ...userDetials,
                    canDelete: !userDetials.canDelete,
                })
                break

            case 'canCreate':
                setUserDetails({
                    ...userDetials,
                    canCreate: !userDetials.canCreate,
                })
                break

            default:
                setUserDetails(userDetials)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetials);
        setUserDetails({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            canRead: false,
            canUpdate: false,
            canDelete: false,
            canCreate: false,
        })
        setToHome(true);
    }

    if (toHome) {
        return <Redirect to="/" />
    }

    return (
        <Card>
            <Card.Header as="h5">Add New User</Card.Header>
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
                            onChange={(e) => handleChange(e, 'phoneNumber')}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Permissions</Form.Label>
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
                            onChange={(e) => handleChange(e, 'canAdd')}
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
            </Card.Body>
        </Card>
    );
}

export default AdminUserForm;
