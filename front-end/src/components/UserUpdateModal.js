import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { updateUserDetails } from '../utils/api';

const UserUpdateModal = (props) => {

    const { employee } = props.location.state;
    const { authedUserDetails } = props;

    /**
    * @description state to store data of input fields
    */
    const [userDetails, setUserDetails] = useState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        mobile: employee.mobile,
        password: employee.password,
    })

    /**
    * @description state to manage redirect to home page
    */
    const [toHome, setToHome] = useState(false);

    /**
    * @description function to handle changes on input field
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
            alert('updated');
            setToHome(true);
        }
        else {
            alert('Some error occured please try again');
        }

    }

    if (toHome) {
        return <Redirect to="/" />
    }

    if (!authedUserDetails.permissions.canUpdate) {
        return <p>You do not have permissions to update employee details</p>
    }

    return (
        <Card>
            <Card.Header as="h5" style={{ backgroundColor: "#343A40", color: "#FFF" }}>Update</Card.Header>
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

                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card >
    );
}

export default UserUpdateModal;
