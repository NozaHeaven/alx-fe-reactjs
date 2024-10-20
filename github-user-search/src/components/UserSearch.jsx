import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const UserSearch = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const data = await fetchUserData(username);
            setUserData(data); // Store fetched user data
            setError(null); // Clear any previous error
        } catch (error) {
            setError("User not found"); // Handle error
            setUserData(null); // Clear previous user data
        }
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p className="text-red-500">{error}</p>}
            {userData && (
                <div>
                    <h2>{userData.name}</h2>
                    <img src={userData.avatar_url} alt={userData.login} />
                    <p>{userData.bio}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default UserSearch;