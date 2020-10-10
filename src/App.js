import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Navbar from './components/layout/Navbar.component';
import Users from './components/users/Users.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });

    // const res = await fetch('https://api.github.com/users');
    // const data = await res.json();
    // console.log(data);

    // fetch('https://api.github.com/users')
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    // axios
    //   .get('https://api.github.com/users')
    //   .then((res) => console.log(res.data));
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
