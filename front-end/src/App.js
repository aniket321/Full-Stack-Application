import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import Nav from './components/Navigation';
import TabBar from './components/TabBar';
import Login from './screens/Login';
import Register from './screens/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { getAuthedUser } from './utils/api';

// import TrialModal from './components/TrialModal';

function App() {

    const [authedUser, setAutherUser] = useState({
        id: null,
        userToken: null,
        userType: null,
    })

    useEffect(() => {
        async function getUser() {
            let user = await getAuthedUser();
            setAutherUser(user);
            console.log(user);
        }
        getUser();
    }, [])

    return (
        <Router>
            <div className='container'>
                {authedUser.id === null ? (
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                ) : (
                        <>
                            <Nav />
                            <Switch>
                                <Route exact path="/" component={TabBar} />
                                <Route exact path="/add" component={UserForm} />
                                {/* <Route component={Error} /> */}
                            </Switch>
                        </>
                    )}
            </div>
        </Router>
    );
}

export default App;
