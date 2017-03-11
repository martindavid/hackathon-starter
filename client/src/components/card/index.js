import React, { Component, PropTypes } from 'react';

import './card.css';

const Card = props => {
    return (
        <div className="card card-stats">
            <div className="card-header" data-background-color={props.backgroundColor}>
                <i className={`fa ${props.iconClass}`}></i>
            </div>
            <div className="card-content">
                <p className="category">{props.category}</p>
                <h3 className="title">{props.title}</h3>
            </div>
            <div className="card-footer">
                <div className="stats">
                    <i className="fa fa-calendar"></i> Last 24 Hours
				</div>
            </div>
        </div>
    )
}

Card.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Card;