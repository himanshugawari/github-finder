import React, { Fragment } from 'react';
import Search from '../users/Search.component';
import Users from '../users/Users.component';

const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
