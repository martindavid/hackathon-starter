import React, { Component } from 'react';

class Home extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <h1 className='display-4'>What are you going to build today?</h1>
        <p className='lead'>A boilerplate for Node.js / ReactJS web applications.</p>
        <hr />
      </div>
    );
  }
}

export default Home;
