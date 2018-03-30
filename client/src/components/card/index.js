import React from 'react';

import './card.css';

const Card = ({
  backgroundColor, iconClass, category, title,
}) => (
  <div className='card card-stats'>
    <div className='card-header' data-background-color={backgroundColor}>
      <i className={`fa ${iconClass}`} />
    </div>
    <div className='card-content'>
      <p className='category'>{category}</p>
      <h3 className='title'>{title}</h3>
    </div>
    <div className='card-footer'>
      <div className='stats'>
        <i className='fa fa-calendar' /> Last 24 Hours
      </div>
    </div>
  </div>
);

export default Card;
