import React, { useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const fetchUserData = async (username) => {
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const repositoriesResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleUsernameSubmit = (username) => {
    fetchUserData(username);
  };

  const handleReset = () => {
    setUser(null);
    setRepositories([]);
  };

  return (
    <div className="container">
      {user ? (
        <div className="user-details">
          <UserDetails
            user={user}
            repositories={repositories}
            onReset={handleReset}
          />
        </div>
      ) : (
        <UserForm onUsernameSubmit={handleUsernameSubmit} />
      )}
    </div>
  );
};

export default App;
