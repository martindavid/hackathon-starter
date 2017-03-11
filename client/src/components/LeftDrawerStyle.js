import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';

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

export default styles;