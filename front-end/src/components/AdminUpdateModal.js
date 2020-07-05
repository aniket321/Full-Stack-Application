import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';


function Modal(props) {
    return (
        <Modal
            {...props}
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
                <AdminUserForm />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const AdminUpdateModal = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    );
}

export default Register;
