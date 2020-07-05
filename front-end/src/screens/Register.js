import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import UserForm from '../components/UserForm';

const Register = () => {
    return (
        <Card>
            <Card.Header as="h5">Register</Card.Header>
            <Card.Body>
                <UserForm />
            </Card.Body>
        </Card>
    );
}

export default Register;
