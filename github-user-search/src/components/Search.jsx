import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  // State for input values
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [page, setPage] = useState(1); // for pagination

  // State for search results
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, page);
      setResults(data.items); // GitHub returns search results in `items`
      setLoading(false);
    } catch (err) {
      setError('Looks like we can’t find the user.');
      setLoading(false);
    }
  };

  // Handle "Load More" for pagination
  const handleLoadMore = async () => {
    setPage(page + 1);
    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, page + 1);
      setResults([...results, ...data.items]); // Append new results to the existing ones
    } catch (err) {
      setError('Error fetching more users.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Min Repos (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {results.map((user) => (
          <div key={user.id} className="p-4 border border-gray-300 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <h2 className="text-xl font-bold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {results.length > 0 && (
        <button
          onClick={handleLoadMore}
          className="bg-gray-300 p-2 mt-4 rounded hover:bg-gray-400"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
