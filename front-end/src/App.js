import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import Nav from './components/Navigation';
import TabBar from './components/TabBar';
import Login from './screens/Login';
import Register from './screens/Register';
import AddUser from './screens/AddUser';
import AdminUpdateModal from './components/AdminUpdateModal';
import UserUpdateModal from './components/UserUpdateModal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { getAuthedUser, setLocalStorage } from './utils/api';

// import TrialModal from './components/TrialModal';

function App() {

    const [authedUser, setAutherUser] = useState({
        id: null,
        userToken: null,
        userType: null,
    })

    const [authedUserDetails, setAuthedUserDetails] = useState(null);

    useEffect(() => {
        async function getUser() {
            let user = await getAuthedUser();
            await setAutherUser(user.authedUser);
            await setAuthedUserDetails(user.userDetails);
        }
        getUser();
    }, [])

    const updateAuthedUser = async (response) => {
        let user = {
            id: response.user._id,
            userToken: response.token,
            userType: response.user.isadmin === false ? 'user' : 'admin',
        }
        await setAuthedUserDetails(response.user);
        await setLocalStorage(user);
        await setAutherUser(user);
    }

    const handleLogout = async () => {
        let user = {
            id: null,
            userToken: null,
            userType: null,
        }
        setAutherUser(user);
        setAuthedUserDetails(null);
        setLocalStorage(user);
    }

    return (
        <Router>
            <div className='container'>
                {authedUser.id === null || authedUserDetails === null ? (
                    <Switch>
                        <Route exact path='/' render={() => (
                            <Login
                                updateAuthedUser={updateAuthedUser}
                            />
                        )}
                        />)
                        <Route exact path="/register" component={Register} />
                    </Switch>
                ) : (
                        <>
                            <Nav handleLogout={handleLogout} />
                            <Switch>
                                <Route exact path='/' render={() => (
                                    <TabBar
                                        authedUserDetails={authedUserDetails}
                                    />
                                )}
                                />
                                <Route exact path='/add' render={() => (
                                    <AddUser
                                        authedUserDetails={authedUserDetails}
                                    />
                                )}
                                />
                                <Route exact path='/admin-update' render={({ location }) => (
                                    <AdminUpdateModal
                                        authedUserDetails={authedUserDetails}
                                        location={location}
                                    />
                                )}
                                />
                                <Route exact path='/user-update' render={({ location }) => (
                                    <UserUpdateModal
                                        authedUserDetails={authedUserDetails}
                                        location={location}
                                    />
                                )}
                                />
                                {/* <Route component={Error} /> */}
                            </Switch>
                        </>
                    )}
            </div>
        </Router>
    );
}

export default App;
