import React, { useState } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import AdminUserForm from './AdminUserForm';


const AdminEmployeeList = () => {
    const [modalShow, setModalShow] = useState(false);

    const handleModal = () => {
        console.log('open');
        let v = !modalShow;
        setModalShow(v);
    }

    return (
        <>
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
                    <Button variant="primary" onClick={handleModal}>Update</Button>
                    <Button variant="danger">Delete</Button>
                </Card.Body>
            </Card>
            {/* {modalShow && ( */}
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Employee Details
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <AdminUserForm /> */}
                    <h1>this is mo</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AdminEmployeeList;

//type={type} id={`inline-${type}-2`}