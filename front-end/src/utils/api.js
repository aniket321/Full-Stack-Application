import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/users';

export const getUsers = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const authenticateUser = async (credentials) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, {
            email: credentials.email,
            password: credentials.password,
        })
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
            setLocalStorage(user);
            return user;
        }
        else {
            let id = JSON.parse(authedUser).id;
            let userDetails = await getUserDetails(id);
            return {
                userDetails,
                authedUser: JSON.parse(authedUser)
            }
        }
    }
    catch (error) {
        alert('Some error occured! Try again');
    }
}

export const getUserDetails = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`)
        return response.data;
    }
    catch (error) {
        return error.response;
    }
}

export const registerUser = async (userDetails) => {
    console.log(userDetails)
    try {
        const response = await axios.post(baseUrl, userDetails)
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const updateUserDetails = async (userDetails, id, updatorId) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, {
            ...userDetails,
            id: updatorId
        })
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`)
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const setLocalStorage = async (user) => {
    try {
        localStorage.clear();
        return localStorage.setItem('authedUser', JSON.stringify(user));
    }
    catch (error) {
        alert('Some error occured! Try again');
    }
}


export const clearLocalStorage = () => {
    return localStorage.clear();
}

