import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getUsers } from '../utils/api';

const AdminEmployeeList = (props) => {

    const [employeeList, setEmployeeList] = useState([]);

    const { authedUserDetails } = props;

    useEffect(() => {
        console.log('admin list useeffect');
        async function fetchUsers() {
            const response = await getUsers();
            console.log(response.data);
            if (response.status === 200) {
                setEmployeeList(response.data);
            }
            else {
                // onError(response.data)
                alert('Some Error occured! Try again');
            }
        }

        fetchUsers();
    }, []);

    return (
        <>
            {employeeList.map(employee => (
                <Card key={employee._id}>
                    <Card.Body>
                        <Card.Text>
                            {`Name: ${employee.firstName} ${employee.lastName}`}
                        </Card.Text>
                        <Card.Text>
                            {`Email: ${employee.email}`}
                        </Card.Text>
                        <Card.Text>
                            {`Mobile: ${employee.mobile}`}
                        </Card.Text>
                        <Button
                            variant="primary"
                            as={Link}
                            to={
                                {
                                    pathname: authedUserDetails.isadmin === false ? "/user-update" : "/admin-update",
                                    state: {
                                        employee
                                    }
                                }
                            }
                        >Update</Button>
                        <Button variant="danger">Delete</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    );


}

export default AdminEmployeeList;

