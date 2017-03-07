import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';
import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router';
import MenuItem from 'material-ui/MenuItem';

const mapStateToProps = state => ({
    ...state.common
});

const mapDispatchToProps = dispatch => ({

});

const styles = {
    logo: {
        cursor: 'pointer',
        fontSize: 22,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: blue600,
        paddingLeft: 40,
        height: 56,
    },
    menuItem: {
        color: white,
        fontSize: 14
    },
    avatar: {
        div: {
            padding: '15px 0 20px 15px',
            //backgroundImage: 'url(' + require('../images/material_bg.png') + ')',
            height: 45
        },
        icon: {
            float: 'left',
            display: 'block',
            marginRight: 15,
            boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
        },
        span: {
            paddingTop: 12,
            display: 'block',
            color: 'white',
            fontWeight: 300,
            textShadow: '1px 1px #444'
        }
    }
};

class LeftDrawer extends Component {
    render() {
        return (
            <Drawer
                docked={true}
                open={this.props.isDrawerOpen}>
                <div style={styles.avatar.div}>
                    <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
                        size={50}
                        style={styles.avatar.icon} />
                    <span style={styles.avatar.span}>{this.props.username}</span>
                </div>
                <div>
                    <MenuItem
                        style={styles.menuItem}
                        primaryText="Menu 1"
                        containerElement={<Link to="/" />}
                    />
                    <MenuItem
                        style={styles.menuItem}
                        primaryText="Menu 2"
                        containerElement={<Link to="/" />}
                    />
                    <MenuItem
                        style={styles.menuItem}
                        primaryText="Menu 3"
                        containerElement={<Link to="/" />}
                    />
                </div>
            </Drawer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);