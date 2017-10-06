import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = state => ({
  ...state.common
});

const mapDispatchToProps = dispatch => ({
});

class App extends Component {

  render() {
    return (
        <div>
          <Header />
          <div className="container">
            {this.props.children}
          </div>
        </div>
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
