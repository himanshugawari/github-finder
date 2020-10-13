import React, { useContext } from 'react';

import UserItem from './UserItem.component';

import GithubContext from '../../context/github/githubContext';

import Spinner from '../../assets/spinner.gif';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <img src={Spinner} style={spinnerStyle} alt='Loading...' />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const spinnerStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block',
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
