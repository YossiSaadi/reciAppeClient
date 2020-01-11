import {useState} from 'react';
import backendApi from '../api/backend';

export default () => {
    const [resultsFound, setResultsFound] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const postUser = async (userId) => {
        try {
            const data = JSON.stringify({
                id: userId,
                role: 'USER',
                name: {
                    first: 'Chef',
                    last: 'Chef',
                },
                favoriteRecipes: [],
                recipes: []
            });
            const headers = {
                "Content-Type": "application/json"
            };
            const response = await backendApi.users.post("http://192.168.43.162:9000/user", data, {headers});
            const results = response.data;
            setResultsFound(results);
            setErrorMessage('');
        } catch
            (e) {
            setErrorMessage('Something went wrong');
            console.log('ERROR: ' + e);
        }
    };

    const getUserById = async (id) => {
        try {
            const response = await backendApi.users.get("http://192.168.43.162:9000/user/"+id);
            const results = response.data;
            setResultsFound(results);
            setErrorMessage('');
        } catch (e) {
            setErrorMessage('Something went wrong');
            console.log('ERROR: ' + e);
        }
    };

    const editUser = async (id) => {
        try {
            const data = JSON.stringify({
                id: id,
                role: 'USER',
                name: {
                    first: 'Chef',
                    last: 'Chef',
                },
                favoriteRecipes: [],
                recipes: []
            });
            const headers = {
                "Content-Type": "application/json"
            };
            const response = await backendApi.users.put("http://192.168.43.162:9000/user", data, {headers});
            const results = response.data;
            setResultsFound(results);
            setErrorMessage('');
        } catch
            (e) {
            setErrorMessage('Something went wrong');
            console.log('ERROR: ' + e);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await backendApi.users.delete("http://192.168.43.162:9000/user/"+id);
            const results = response.data;
            setResultsFound(results);
            setErrorMessage('');
        } catch (e) {
            setErrorMessage('Something went wrong');
            console.log('ERROR: ' + e);
        }
    };

    return {postUser, getUserById, editUser, deleteUser, resultsFound, errorMessage};
};