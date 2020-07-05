import React, { useState } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import AdminUserForm from './AdminUserForm';

function UpdateModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update User Details
                </Modal.Title>
            </Modal.Header>
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

    const handleModal = () => {
        setModalShow(!modalShow);
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
                {modalShow && (
                    <UpdateModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                )}
            </Card>
        </>
    );


}

export default AdminEmployeeList;

