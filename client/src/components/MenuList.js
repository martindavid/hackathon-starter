import React from 'react';
import { Link } from 'react-router';

const MenuList = props => {
    let { menuItem } = props.styles;
    return (
        <div>
            <MenuItem
                style={menuItem}
                primaryText="Home"
                containerElement={<Link to="/" />}
            />
            <MenuItem
                style={menuItem}
                primaryText="Component"
                containerElement={<Link to="/component" />}
            />
            <MenuItem
                style={menuItem}
                primaryText="Login"
                containerElement={<Link to="/login" />}
            />
        </div>
    );
}

export default MenuList;