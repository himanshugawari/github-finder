import React from 'react';
import PropTypes from 'prop-types';

import ReposItem from './ReposItem.component';

const Repos = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <ReposItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
