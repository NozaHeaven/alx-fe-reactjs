import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

/**
 * Fetches GitHub users based on the search term and additional criteria.
 * @param {string} username - The GitHub username to search for.
 * @param {string} location - The location to filter users by.
 * @param {number} minRepos - The minimum number of repositories to filter users by.
 * @param {number} page - The current page for pagination.
 * @returns {Promise} - A promise that resolves to the search results from the GitHub API.
 */
export const fetchAdvancedUserData = async (username, location = '', minRepos = 0, page = 1) => {
    // Build the query string based on the parameters
    let query = `${username}`;
    
    if (location) {
        query += `+location:${location}`;
    }

    if (minRepos > 0) {
        query += `+repos:>=${minRepos}`;
    }

    // Add pagination parameters (page and per_page)
    query += `&page=${page}&per_page=30`;

    try {
        // Send the request to the GitHub API
        const response = await axios.get(`${BASE_URL}${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching advanced user data:', error);
        throw error;
    }
};
