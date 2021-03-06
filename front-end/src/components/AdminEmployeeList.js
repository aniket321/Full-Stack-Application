import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getUsers, deleteUser } from '../utils/api';

const AdminEmployeeList = (props) => {

    /**
    * @description state to store list of all users
    */
    const [employeeList, setEmployeeList] = useState([]);
    const { authedUserDetails } = props;

    /**
    * @description function to fetch all users
    */
    async function fetchUsers() {
        const response = await getUsers();
        if (response.status === 200) {
            setEmployeeList(response.data);
        }
        else {
            // onError(response.data)
            alert('Some Error occured! Try again');
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    /**
    * @description function to handle delete button
    */
    const handleDelete = async (employee) => {
        const response = await deleteUser(employee._id);
        if (response.status === 200) {
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
                employee.isadmin === false && (
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
                                className="mr-2"
                                variant="success"
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
                            <Button
                                disabled={!authedUserDetails.permissions.canDelete}
                                variant="outline-danger"
                                onClick={() => handleDelete(employee)}
                                className="delete-btn"
                            >Delete</Button>
                        </Card.Body>
                    </Card>
                )
            ))}
        </>
    );


}

export default AdminEmployeeList;

