import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const EmployeeDetailsCard = () => {
    const [key, setKey] = useState('home');

    return (
        <Card className="text-center">
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
            </Card.Body>
        </Card>
    );
}

export default EmployeeDetailsCard