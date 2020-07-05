import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getUsers, deleteUser } from '../utils/api';

const AdminEmployeeList = (props) => {

    const [employeeList, setEmployeeList] = useState([]);

    const { authedUserDetails } = props;

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

    useEffect(() => {
        console.log('admin list useeffect');
        fetchUsers();
    }, []);

    const handleDelete = async (employee) => {
        console.log(employee)
        const response = await deleteUser(employee._id);
        if (response.status == 200) {
            await fetchUsers();
        }
        else {
            alert('Some error occured');
        }
    }

    if (!authedUserDetails.permissions.canRead) {
        return <p>You do not have permission to view Employees</p>
    }

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
                        <Card.Text>
                            Permissions:
                        </Card.Text>
                        <ul>
                            {employee.permissions.canRead && (
                                <li>Can View Employee List</li>
                            )}
                            {employee.permissions.canCreate && (
                                <li>Can add a new Employee</li>
                            )}
                            {employee.permissions.canUpdate && (
                                <li>Can Update Employee</li>
                            )}
                            {employee.permissions.canDelete && (
                                <li>Can Delete Employee</li>
                            )}
                        </ul>
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
                        <Button variant="danger" onClick={() => handleDelete(employee)}>Delete</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    );


}

export default AdminEmployeeList;

