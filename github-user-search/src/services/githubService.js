import axios from 'axios';

const BASE_URL = ["https://api.github.com/search/users?q"];

// Fetch user data by username and other optional parameters
export const fetchUserData = async (username, location = '', minRepos = 0, page = 1) => {
  let query = `q=${username}&page=${page}&per_page=30`; // Set default per_page

  if (location) {
    query += `+location:${location}`; // Add location filter if provided
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`; // Add minimum repositories filter if provided
  }

  const response = await axios.get(`${BASE_URL}?${query}`);
  return response.data; // Returns the search results
};
