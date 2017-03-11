import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900, blue100, white} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  menuItem: {
    selectedTextColor: blue100,
    color: white
  },
  raisedButton: {
    primaryColor: blue600,
  }
});


export default themeDefault;