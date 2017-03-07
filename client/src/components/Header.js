import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { white } from 'material-ui/styles/colors';

class Header extends Component {

    render() {
        const styles = {
            appBar: {
                position: 'fixed',
                top: 0,
                overflow: 'hidden',
                maxHeight: 57
            },
            menuButton: {
                marginLeft: 10
            },
            iconsRightContainer: {
                marginLeft: 20
            }
        };

        return (
            <div>
                <AppBar
                    style={{ ...this.props.styles, ...styles.appBar }}
                    title={this.props.title}
                    iconElementLeft={
                        <IconButton style={{...styles.menuButton}} onClick={this.props.handleChangeRequestNavDrawer}>
                            <Menu color={white} />
                        </IconButton>
                    }
                />
            </div>
        );
    }
};

export default Header;