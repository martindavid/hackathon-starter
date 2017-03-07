import React, { Component } from 'react';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import themeDefault from '../theme-default';

import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';

const mapStateToProps = state => ({
  ...state.common
});

const mapDispatchToProps = dispatch => ({
  onDrawerClick: (isDrawerOpen) =>
    dispatch({ type: 'DRAWER_CLICK', isDrawerOpen })
});

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {

  constructor() {
    super();
    this.handleChangeRequestNavDrawer = () =>
      this.props.onDrawerClick(!this.props.isDrawerOpen);
  }

  render() {
    let navDrawerOpen = this.props.isDrawerOpen;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={themeDefault}>
        <div>
          <Header 
            title={this.props.appName}
            styles={styles.header}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />
          <LeftDrawer navDrawerOpen={this.props.isDrawerOpen}
            username="User Admin" />
          <div style={{ ...styles.container }}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
