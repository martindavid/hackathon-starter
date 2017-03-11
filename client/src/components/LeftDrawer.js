import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import MenuList from './MenuList'
import styles from './LeftDrawerStyle';

class LeftDrawer extends Component {
    render() {
        return (
            <Drawer
                docked={true}
                open={this.props.navDrawerOpen}>
                <div style={styles.avatar.div}>
                    <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
                        size={50}
                        style={styles.avatar.icon} />
                    <span style={styles.avatar.span}>{this.props.username}</span>
                </div>
                <MenuList styles={styles} />
            </Drawer>
        );
    }
}

export default LeftDrawer;