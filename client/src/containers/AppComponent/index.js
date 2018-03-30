import React, { Component } from 'react';
import Card from 'components/card';

class AppComponent extends Component {
  componentWillMount() {}
  render() {
    return (
      <div>
        <h3>Card</h3>
        <div className='row'>
          <div className='col-md-4'>
            <Card
              backgroundColor='orange'
              iconClass='fa-calendar'
              category='Revenue'
              title='$40,000'
            />
          </div>
          <div className='col-md-4'>
            <Card
              backgroundColor='blue'
              iconClass='fa-clone'
              category='Revenue'
              title='$40,000'
            />
          </div>
          <div className='col-md-4'>
            <Card
              backgroundColor='red'
              iconClass='fa-shopping-cart'
              category='Revenue'
              title='$40,000'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AppComponent;
