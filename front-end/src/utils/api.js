import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/users/';

export const getUsers = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const getAuthedUser = async () => {
    try {
        let authedUser = localStorage.getItem('authedUser');
        if (authedUser == null) {
            let user = {
                id: null,
                userToken: null,
                userType: null,
            }
            setAutherUser(user);
            return user;
        }
        return JSON.parse(authedUser);
    }
    catch (error) {
        alert('Some error occured! Try again');
    }
}

const setAutherUser = async (user) => {
    try {
        return localStorage.setItem('authedUser', JSON.stringify(user));
    }
    catch (error) {
        alert('Some error occured! Try again');
    }
}

