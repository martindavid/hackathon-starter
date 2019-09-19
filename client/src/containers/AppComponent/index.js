import React from 'react';
import InfoCard from 'components/card/infoCard';

const AppComponent = () => (
  <div>
    <h3>Card</h3>
    <div className="row">
      <div className="col-md-4">
        <InfoCard
          bgColor="orange"
          iconClass="fa-calendar"
          description="Revenue"
          title="$40,000"
          subInfo="Last 24 hours"
        />
      </div>
      <div className="col-md-4">
        <InfoCard
          bgColor="blue"
          iconClass="fa-clone"
          description="Revenue"
          title="$40,000"
          subInfo="Last 24 hours"
        />
      </div>
      <div className="col-md-4">
        <InfoCard
          bgColor="red"
          iconClass="fa-shopping-cart"
          description="Revenue"
          title="$40,000"
          subInfo="Last 24 hours"
        />
      </div>
    </div>
  </div>
  );

export default AppComponent;
