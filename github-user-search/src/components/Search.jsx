import React, { useState } from 'react';
import fetchAdvancedUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1); // State to track the current page

    // Function to handle form submission
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData([]);  // Clear the previous search results
        setPage(1);  // Reset to page 1 on new search

        try {
            const data = await fetchAdvancedUserData(username, location, minRepos, 1);
            setUserData(data.items);
        } catch (err) {
            setError("Looks like we can't find the user based on your search criteria");
        } finally {
            setLoading(false);
        }
    };

    // Function to load more data
    const loadMore = async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await fetchAdvancedUserData(username, location, minRepos, page + 1);
            setUserData(prevUserData => [...prevUserData, ...data.items]); // Append new data
            setPage(page + 1); // Increment page
        } catch (err) {
            setError("Error loading more users");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            {/* Form for search input */}
            <form onSubmit={handleSearch} className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="GitHub Username"
                        className="border border-gray-300 rounded p-2"
                    />
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                        className="border border-gray-300 rounded p-2"
                    />
                    <input
                        type="number"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        placeholder="Minimum Repositories"
                        className="border border-gray-300 rounded p-2"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-4">
                    Search
                </button>
            </form>

            {/* Loading, Error, and Results */}
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {userData.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userData.map((user) => (
                        <div key={user.id} className="border p-4 rounded shadow">
                            <h2 className="text-xl font-bold">{user.login}</h2>
                            <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
                            <p>Location: {user.location || 'Not available'}</p>
                            <p>Repositories: {user.public_repos || 'Not available'}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}

            {/* Load More Button */}
            {userData.length > 0 && (
                <button
                    onClick={loadMore}
                    className="bg-gray-300 text-black p-2 rounded mt-4">
                    Load More
                </button>
            )}
        </div>
    );
};

export default Search;
