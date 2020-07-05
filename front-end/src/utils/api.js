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
