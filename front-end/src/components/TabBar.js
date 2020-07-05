import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import EmployeeDetailsCard from './EmployeeDetailsCard';
import AdminEmployeeList from './AdminEmployeeList';
import UserEmployeeList from './UserEmployeeList';

const ControlledTabs = (props) => {
    const [key, setKey] = useState('Your Details');
    const { authedUserDetails } = props;
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="Your Details" title="Your Details">
                <EmployeeDetailsCard authedUserDetails={authedUserDetails} />
            </Tab>
            <Tab eventKey="Employee List" title="Employee List">
                <AdminEmployeeList authedUserDetails={authedUserDetails} />
            </Tab>
        </Tabs>
    );
}

export default ControlledTabs