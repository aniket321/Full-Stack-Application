import React, { useState } from 'react';
import UserForm from './components/UserForm';
import Nav from './components/Navigation';
import TabBar from './components/TabBar';
import Login from './screens/Login';
import Register from './screens/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

    const [authedUser, setAutherUser] = useState({
        id: 'null',
        userToken: '',
        userType: '',
    })

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
