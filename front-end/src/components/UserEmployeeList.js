import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const UserEmployeeList = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    Name: Aniket Hatti
                </Card.Text>
                <Card.Text>
                    Email: aniket@gmail.com
                </Card.Text>
                <Card.Text>
                    Phone Number: 12455
                </Card.Text>
                <Button variant="primary">Update</Button>
                <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default UserEmployeeList;

//type={type} id={`inline-${type}-2`}