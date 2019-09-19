import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const InfoCard = ({
 bgColor, iconClass, title, description, subInfo,
}) => (
  <div className="card card-stats">
    <div className="card-header" data-background-color={bgColor}>
      <i className={`fa ${iconClass}`} />
    </div>
    <div className="card-content">
      <p className="category">{title}</p>
      <h3 className="title">{description}</h3>
    </div>
    <div className="card-footer">
      {subInfo && (
        <div className="stats">
          <i className="fa fa-calendar" />
          {' '}
          {subInfo}
        </div>
      )}
    </div>
  </div>
);

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subInfo: PropTypes.string,
  bgColor: PropTypes.string,
  iconClass: PropTypes.string,
};

InfoCard.defaultProps = {
  subInfo: null,
  bgColor: 'red',
  iconClass: 'fa-home',
};

export default InfoCard;
