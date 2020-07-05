import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import UserForm from '../components/UserForm';
import AdminUserForm from '../components/AdminUserForm';

const AddUser = (props) => {
    const { authedUserDetails } = props;

    // if (authedUserDetails.permissions.canCreate === false && authedUserDetails.isadmin === false) {
    //     return <p>You dont have permission to add an employee</p>
    // }

    return (
        authedUserDetails.isadmin === false ?
            (
                <Card>
                    <Card.Header as="h5">Add Employee</Card.Header>
                    <Card.Body>
                        <UserForm />
                    </Card.Body>
                </Card>
            ) :
            (
                <Card>
                    <Card.Header as="h5">Add Employee</Card.Header>
                    <Card.Body>
                        <AdminUserForm />
                    </Card.Body>
                </Card>
            )

    );
}

export default AddUser;
