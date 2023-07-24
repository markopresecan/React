import React from "react";
import PropTypes from "prop-types";

const UserDetails = ({ user, repositories, onReset }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      <p>Location: {user.location}</p>
      <p>{user.bio}</p>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
