import axios from 'axios';

const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`, {
            headers: {
                'Authorization': `token ${apiKey}`, // Only needed if you have a personal access token
            }
        });
        return response.data; // Return user data
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
};

export default fetchUserData;