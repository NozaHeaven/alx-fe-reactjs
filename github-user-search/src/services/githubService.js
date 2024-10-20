import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

/**
 * Function to fetch user data based on advanced search criteria.
 * @param {string} username - GitHub username to search for.
 * @param {string} location - Location filter for the search.
 * @param {number} minRepos - Minimum number of repositories filter.
 * @param {number} page - Page number for pagination.
 * @returns {Promise} - A promise that resolves to the fetched user data.
 */
const fetchAdvancedUserData = async (username, location, minRepos, page = 1) => {
    let query = `q=${username}+in:login&page=${page}&per_page=30`; // default to 30 results per page

    // Add optional location and repositories filters
    if (location) {
        query += `+location:${location}`;
    }
    if (minRepos) {
        query += `+repos:>=${minRepos}`;
    }

    try {
        const response = await axios.get(`${BASE_URL}?${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from GitHub API:', error);
        throw new Error('Failed to fetch data from GitHub API');
    }
};

export default fetchAdvancedUserData;
