import axios from 'axios';
const baseUrl = 'http://localhost:4000/api/users';

/**
* @description function to get list of all users from the DB
*/
export const getUsers = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response;
    }
    catch (error) {
        return error.response;
    }
}

/**
* @description function to authenticate user
*/
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

/**
* @description function to get the loggedin user from the localstorage
*/
export const getAuthedUser = async () => {
    try {
        let authedUser = localStorage.getItem('authedUser');
        if (authedUser === null) {
            let user = {
                authedUser: {
                    id: null,
                    userToken: null,
                    userType: null,
                },
                userDetails: null
            }
            await setLocalStorage(user.authedUser);
            return user;
        }
        else {
            let id = JSON.parse(authedUser).id;
            if (id === null) {
                return {
                    userDetails: null,
                    authedUser: JSON.parse(authedUser)
                }
            }
            else {
                let userDetails = await getUserDetails(id);
                return {
                    userDetails,
                    authedUser: JSON.parse(authedUser)
                }
            }

        }
    }
    catch (error) {
        alert('Some error occured! Try again');
    }
}

/**
* @description function to get details of particular user
*/
export const getUserDetails = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}/${id}`)
        return response.data;
    }
    catch (error) {
        return error.response;
    }
}


/**
* @description function to register a user
*/
export const registerUser = async (userDetails) => {
    try {
        const response = await axios.post(baseUrl, userDetails)
        return response;
    }
    catch (error) {
        return error.response;
    }
}

/**
* @description function to update details of a user
*/
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

/**
* @description function to delete a user
*/
export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`)
        return response;
    }
    catch (error) {
        return error.response;
    }
}

/**
* @description function to set the localstorage
*/
export const setLocalStorage = async (user) => {
    try {
        await localStorage.clear();
        return localStorage.setItem('authedUser', JSON.stringify(user));
    }
    catch (error) {
        alert('Some error occured! Try again');
    }
}


export const clearLocalStorage = () => {
    return localStorage.clear();
}

