import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ onUsernameSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onUsernameSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

UserForm.propTypes = {
  onUsernameSubmit: PropTypes.func.isRequired,
};

export default UserForm;
