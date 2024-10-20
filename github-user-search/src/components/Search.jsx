// src/components/Search.jsx
import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent form submission
        setLoading(true); // Set loading state
        setError(null); // Clear previous errors
        setUserData(null); // Clear previous user data

        try {
            const data = await fetchUserData(username); // Fetch user data
            setUserData(data); // Set user data to state
        } catch (err) {
            setError("Looks like we can't find the user"); // Set error message
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch} className="mb-4">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                    className="border border-gray-300 rounded p-2 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white rounded p-2">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {userData && (
                <div className="border p-4 rounded shadow">
                    <h2 className="text-xl font-bold">{userData.name || userData.login}</h2>
                    <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full" />
                    <p>{userData.bio}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
