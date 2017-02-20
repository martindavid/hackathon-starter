import React from 'react';
import AppBar from 'material-ui/AppBar';


const Header = () => {
    return (
        <div>
            <AppBar
              title="Hackathon Starter"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </div>
    );
};

export default Header;