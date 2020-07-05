import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import AdminUserForm from './AdminUserForm';

import { getUsers } from '../utils/api';

function UpdateModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update User Details
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <AdminUserForm />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const AdminEmployeeList = () => {
    const [modalShow, setModalShow] = useState(false);
    const [employeeList, setEmployeeList] = useState([]);

    const handleModal = () => {
        setModalShow(!modalShow);
    }

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
                        <Button variant="primary" onClick={handleModal}>Update</Button>
                        <Button variant="danger">Delete</Button>
                    </Card.Body>
                    {modalShow && (
                        <UpdateModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    )}
                </Card>
            ))}
        </>
    );


}

export default AdminEmployeeList;

