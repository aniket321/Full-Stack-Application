import React from 'react';
import { Card } from 'react-bootstrap';
import UserForm from '../components/UserForm';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Card>
            <Card.Header as="h5">Register</Card.Header>
            <Card.Body>
                <UserForm />
                <br />
                <Link to="/" style={{ color: "black", textDecoration: "underline" }}>Go Back</Link>
            </Card.Body>
        </Card>
    );
}

export default Register;
