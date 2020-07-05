import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { updateUserDetails } from '../utils/api';

const AdminUpdateModal = (props) => {

    const { employee } = props.location.state;
    const { authedUserDetails } = props;

    const [userDetails, setUserDetails] = useState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        mobile: employee.mobile,
        password: employee.password,
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

        const response = await updateUserDetails(newUser, employee._id, authedUserDetails._id);
        if (response.status === 200) {
            //alert('updated');
            setToHome(true);
        }
        else {
            alert('Some error occured please try again');
        }

    }

    if (toHome) {
        return <Redirect to="/" />
    }

    return (
        <Card>
            <Card.Header as="h5">Update</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            onChange={(e) => handleChange(e, 'firstName')}
                            value={userDetails.firstName}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            onChange={(e) => handleChange(e, 'lastName')}
                            value={userDetails.lastName}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            disabled
                            type="email"
                            placeholder="Enter email"
                            required
                            onChange={(e) => handleChange(e, 'email')}
                            value={userDetails.email}
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
                            value={userDetails.mobile}
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

                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </Card.Body>
        </Card>

    );
}

export default AdminUpdateModal;
