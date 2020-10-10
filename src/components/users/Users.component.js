import React from 'react';
import PropTypes from 'prop-types';

import UserItem from './UserItem.component';

import Spinner from '../../assets/spinner.gif';

const Users = ({ users, loading }) => {
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
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
