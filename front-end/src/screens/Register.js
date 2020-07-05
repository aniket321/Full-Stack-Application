import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import UserForm from '../components/UserForm';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Card>
            <Card.Header as="h5">Register</Card.Header>
            <Card.Body>
                <UserForm />
                <br />
                <Link to="/">Go Back</Link>
            </Card.Body>
        </Card>
    );
}

export default Register;
