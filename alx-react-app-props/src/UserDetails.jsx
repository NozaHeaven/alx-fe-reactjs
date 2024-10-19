import React, { useContext } from 'react';
import UserContext from './UserContext';  // Import UserContext

function UserDetails() {
    const { name, email } = useContext(UserContext);  // Use useContext
  
    return (
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
  
  export default UserDetails;

