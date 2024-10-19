import React, { createContext, useState } from 'react';

// Create a Context with default user data
const UserContext = createContext({
  name: '',
  email: '',
});

export default UserContext;
