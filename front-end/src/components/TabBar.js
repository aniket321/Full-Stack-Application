import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import EmployeeDetailsCard from './EmployeeDetailsCard';
import AdminEmployeeList from './AdminEmployeeList';

const ControlledTabs = (props) => {
    const [key, setKey] = useState('Your Details');
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="Your Details" title="Your Details">
                <EmployeeDetailsCard authedUserDetails={props.authedUserDetails} />
            </Tab>
            <Tab eventKey="Employee List" title="Employee List">
                <AdminEmployeeList />
            </Tab>
        </Tabs>
    );
}

export default ControlledTabs